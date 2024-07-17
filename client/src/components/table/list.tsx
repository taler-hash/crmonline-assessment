import UpdateDialog from './updateDialog'
import * as Table from "../ui/table"
import DeleteDialog from './deleteDialog'
import { forwardRef, useEffect, useImperativeHandle, useState, useRef } from 'react'
import axios from '@/axios'
import LoadingRequest from '../loadingRequest'
import { fieldProps, filterProps } from '@/types/customerTypes'
import _Pagination from './pagination'

interface CustomerProps {
  data?: [],
  links?: []
  current_page?: number
}

interface UpdateDialogProps {
  handleOpen: () => void,
}

interface FilterProps {
  page: number, 
  searchstring: string
}

const List = forwardRef(function (props, ref) {

  const [customers, setCustomers] = useState<CustomerProps>({
    current_page: 1
  })
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [ filterOptions, setFilterOptions ] = useState<FilterProps>({
    page: 1,
    searchstring: ''
  })
  const ud = useRef<UpdateDialogProps | null>(null);
  const dd = useRef<UpdateDialogProps | null>(null);

  useEffect(() => {
    renderList()
  }, [filterOptions])

  function initList(filter: filterProps) {

    if(filter.searchstring) filter.page = 1

    setFilterOptions(prev => ({...prev, ...filter}))
  }

  function renderList() {

    setIsLoading(() => true)
    axios.get("customers", {
      params: filterOptions
    })
      .then(res => {
        setCustomers(() => res.data.data)
        setIsLoading(() => false)
      })
  }

  useImperativeHandle(ref, () => {
    return {
      initList
    }
  })

  return (
    <>
      <div className="relative mt-5 rounded-md h-[calc(100%-6rem)]">
        {isLoading && <LoadingRequest />}
        <div className="h-full overflow-auto">
          <Table.Table>
            <Table.TableHeader>
              <Table.TableRow>
                <Table.TableHead>#</Table.TableHead>
                <Table.TableHead>Name</Table.TableHead>
                <Table.TableHead>Email Address</Table.TableHead>
                <Table.TableHead>Contact Number</Table.TableHead>
                <Table.TableHead>Actions</Table.TableHead>
              </Table.TableRow>
            </Table.TableHeader>
            <Table.TableBody>
              {customers.data?.map((customer: fieldProps, index) => (
                <Table.TableRow key={index}>
                  <Table.TableCell className="font-medium">{index + 1}</Table.TableCell>
                  <Table.TableCell>{customer.full_name}</Table.TableCell>
                  <Table.TableCell>{customer.email_address}</Table.TableCell>
                  <Table.TableCell >{customer.contact_number}</Table.TableCell>
                  <Table.TableCell>
                    <div className="flex items-center gap-x-2">
                      <UpdateDialog fields={customer} ref={ud} />
                      <DeleteDialog fields={customer} ref={dd}/>
                    </div>
                  </Table.TableCell>
                </Table.TableRow>
              ))}
            </Table.TableBody>
          </Table.Table>
        </div>
      </div>
      <_Pagination links={customers.links} />
    </>

  )
})

export default List

