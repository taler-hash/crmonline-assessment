import * as Alert from "../ui/alert-dialog"
import { PencilIcon } from '@heroicons/react/24/solid'
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { forwardRef, useImperativeHandle, useState, useContext, useEffect } from "react"
import { Button } from "../ui/button"
import { errorProps, fieldProps } from "@/types/customerTypes"
import CustomerContext from "@/context/CustomerContext"
import DisplayErrors from "./displayError"
import axios from "@/axios"
import { useToast } from "../ui/use-toast"
import LoadingRequest from "../loadingRequest"

interface propTypes {
  fields: fieldProps
}

const UpdateDialog = forwardRef(function (props: propTypes, ref) {
  const [open, setOpen] = useState<boolean>(false)
  const [fields, setFields] = useState<fieldProps>({})
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<errorProps>({})
  const _CustomerContext = useContext(CustomerContext)
  const { toast } = useToast()

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
    setErrors({})
  }

  function handleOpen() {
    setOpen(() => true)
    initFields()
  }

  function handleClose() {
    setOpen(() => false)
  }

  function handleSubmit() {
    const noChanges = JSON.stringify(props.fields) === JSON.stringify(fields)

    if (noChanges) {
      toast({
        title: 'Info',
        description: 'No Changes were made'
      })

      return
    }

    setIsLoading(() => true)

    axios.post('customer/update', fields)
      .then(res => {
        toast({
          title: 'Success',
          description: 'Successfully Updated Customer'
        })

        setOpen(() => false)
        _CustomerContext.renderList({})
      })
      .catch(err => {
        const status = err.response?.status
        const errors = err.response?.data.errors
        console.log(err)
        if (status === 422) {
          setErrors(() => errors)
        }
      })
      .finally(() => {
        setIsLoading(() => false)
      })
  }

  function updateFields(events: React.ChangeEvent<HTMLInputElement>) {
    const value = events.target.value
    const key = events.target.id

    setFields(prev => ({ ...prev, [key]: value }))
  }

  return (
    <Alert.AlertDialog open={open}>
      <Alert.AlertDialogTrigger onClick={handleOpen}>
        <PencilIcon className='size-5 text-yellow-500' />
      </Alert.AlertDialogTrigger>
      <Alert.AlertDialogContent className="w-96">
        {isLoading && <LoadingRequest />}
        <Alert.AlertDialogHeader>
          <Alert.AlertDialogTitle>Update Customer</Alert.AlertDialogTitle>
          <Alert.AlertDialogDescription></Alert.AlertDialogDescription>
        </Alert.AlertDialogHeader>
        <div className="space-y-4 w-full">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="first_name">First name <span className="text-rose-500">*</span></Label>
            <Input value={fields.first_name} type="text" id="first_name" onChange={updateFields} placeholder="Input First name" />
            {<DisplayErrors fieldErrors={errors.first_name} />}
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="last_name">Last name <span className="text-rose-500">*</span></Label>
            <Input value={fields.last_name} type="text" id="last_name" onChange={updateFields} placeholder="Input last name" />
            {<DisplayErrors fieldErrors={errors.last_name} />}
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email_address">Email address <span className="text-rose-500">*</span></Label>
            <Input value={fields.email_address} type="email" id="email_address" onChange={updateFields} placeholder="Input Email address" />
            {<DisplayErrors fieldErrors={errors.email_address} />}
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="contact_number">Contact number</Label>
            <Input value={fields.contact_number} type="text" id="contact_number" onChange={updateFields} placeholder="Input Contact Number" />
            {<DisplayErrors fieldErrors={errors.contact_number} />}
          </div>
        </div>
        <Alert.AlertDialogFooter>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="btn-success">
            Submit
          </Button>
        </Alert.AlertDialogFooter>
      </Alert.AlertDialogContent>
    </Alert.AlertDialog>
  )
})

export default UpdateDialog

