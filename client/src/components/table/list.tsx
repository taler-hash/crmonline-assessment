import UpdateDialog from './updateDialog'
import * as Table from "../ui/table"
import DeleteDialog from './deleteDialog'
import { forwardRef, useEffect, useImperativeHandle, useState, useRef } from 'react'
import axios from '@/axios'
import LoadingRequest from '../loadingRequest'
import { fieldProps } from '@/types/customerTypes'

interface CustomerProps {
  data?: {data?: []}
}

interface UpdateDialogProps {
  handleOpen: () => void,
}

const List = forwardRef(function (props, ref) {

  const [customers, setCustomers] = useState<CustomerProps>({})
  const [ isLoading, setIsLoading ] = useState<boolean>(true)
  const ud = useRef<UpdateDialogProps | null>(null);

  

  useEffect(() => {
    initList()
  }, [])

  function initList() {
    setIsLoading(() => true)
    
    axios.get('customers')
      .then(res => {
        setCustomers(() => res.data)
        setIsLoading(() => false)
      })
      .catch(err => {
        console.log(err)
      })
  }

  function openUpdateDialog() {
    ud.current.handleOpen()
  }

  useImperativeHandle(ref, () => {
    return {
      initList
    }
  })

  return (
    <div className="relative mt-5 rounded-md h-[calc(100%-4rem)]">
      { isLoading && <LoadingRequest />}
      <div className="h-full overflow-auto">
        <Table.Table>
          <Table.TableCaption>A list of recent customers .</Table.TableCaption>
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
            {customers.data?.data?.map((customer: fieldProps, index) => (
              <Table.TableRow key={index}>
                <Table.TableCell className="font-medium">1</Table.TableCell>
                <Table.TableCell>{ customer.full_name }</Table.TableCell>
                <Table.TableCell>{ customer.email_address }</Table.TableCell>
                <Table.TableCell className="text-right">{ customer.contact_number }</Table.TableCell>
                <Table.TableCell>
                  <div className="flex items-center gap-x-2">
                    <UpdateDialog fields={customer} ref={ud}/>
                    <DeleteDialog />
                  </div>
                </Table.TableCell>
              </Table.TableRow>
            ))}

          </Table.TableBody>
        </Table.Table>
      </div>
    </div>
  )
})

export default List

