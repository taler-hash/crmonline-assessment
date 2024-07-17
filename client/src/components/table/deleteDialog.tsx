import { forwardRef, useImperativeHandle, useState, useEffect, useContext } from "react"
import * as Alert from "../ui/alert-dialog"
import { TrashIcon } from '@heroicons/react/24/solid'
import LoadingRequest from "../loadingRequest"
import { fieldProps } from "@/types/customerTypes"
import axios from "@/axios"
import { useToast } from "../ui/use-toast"
import CustomerContext from "@/context/CustomerContext"

interface propTypes {
  fields: fieldProps
}

const DeleteDialog = forwardRef(function (props: propTypes, ref) {
  const [open, setOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fields, setFields] = useState<fieldProps>({})
  const { toast } = useToast()
  const _CustomerContext = useContext(CustomerContext)

  useImperativeHandle(ref, () => {
    return {
      handleOpen
    }
  })

  useEffect(() => {
    initFields()
  }, [open])

  function initFields() {
    setFields(() => props.fields)
  }

  function handleOpen() {
    setOpen(() => true)
  }

  function handleClose() {
    setOpen(() => false)
  }

  function handleSubmit() {
    setIsLoading(() => true)
    axios.post('/customer/delete', fields)
    .then(res => {
      toast({
        title: 'Success',
        description: 'Successfully Deleted Customer'
      })

      setOpen(() => false)
      _CustomerContext.renderList({})
    })
    .finally(() => {
      setIsLoading(() => false)
    })
  }

  return (
    <Alert.AlertDialog open={open}>
      <Alert.AlertDialogTrigger onClick={handleOpen}>
        <TrashIcon className='size-5 text-rose-500' />
      </Alert.AlertDialogTrigger>
      <Alert.AlertDialogContent>
        {isLoading && <LoadingRequest />}
        <Alert.AlertDialogHeader>
          <Alert.AlertDialogTitle>Delete Customer</Alert.AlertDialogTitle>
          <Alert.AlertDialogDescription>
            Are you sure you want to delete Customer <span className="font-medium">{fields?.full_name}</span>.
          </Alert.AlertDialogDescription>
        </Alert.AlertDialogHeader>
        <Alert.AlertDialogFooter>
          <Alert.AlertDialogCancel onClick={handleClose}>Cancel</Alert.AlertDialogCancel>
          <Alert.AlertDialogAction onClick={handleSubmit} className="bg-rose-500 hover:bg-rose-600">Delete</Alert.AlertDialogAction>
        </Alert.AlertDialogFooter>
      </Alert.AlertDialogContent>
    </Alert.AlertDialog >
  )
})

export default DeleteDialog