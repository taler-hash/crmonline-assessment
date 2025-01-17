import * as Alert from "../ui/alert-dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from "react"
import axios from '@/axios'
import LoadingRequest from "../loadingRequest"
import { useToast } from "../ui/use-toast"
import CustomerContext from "@/context/CustomerContext"
import { fieldProps, errorProps } from "@/types/customerTypes"
import DisplayErrors from "./displayError"



const AddDialog = forwardRef(function (_, ref) {
    const [open, setOpen] = useState<boolean>(false);
    const [fields, setFields] = useState<fieldProps>({})
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [ errors, setErrors ] = useState<errorProps>({})
    const _CustomerContext = useContext(CustomerContext)

    const { toast } = useToast()

    useEffect(()=> {
      resetFields()
    }, [open])

    function resetFields() {
      setFields({})
      setErrors({})
    }

    useImperativeHandle(ref, () => {
      return {
        handleOpen,
      }
    }, [])

    function handleOpen() {
      setOpen(() => true)
    }

    function handleClose() {
      setOpen(() => false)
    }

    function handleSubmit() {
      setIsLoading(() => true)
      axios.post('customer/create', fields)
      .then(() => {
        toast({
          title: 'Success',
          description: 'Successfully added a new customer.'
        })
        setOpen(() => false)
        _CustomerContext.renderList({})
      })
      .catch(err => {
        const status = err.response?.status
        const errors = err.response?.data.errors
        if(status === 422) {
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

      setFields(prev => ({...prev, [key]: value}))
    }

    return (
      <Alert.AlertDialog open={open}>
          <Alert.AlertDialogContent className="w-96">
            { isLoading && <LoadingRequest />}
            <Alert.AlertDialogHeader>
              <Alert.AlertDialogTitle>Add Customer</Alert.AlertDialogTitle>
              <Alert.AlertDialogDescription></Alert.AlertDialogDescription>
            </Alert.AlertDialogHeader>
            <div className="space-y-4 w-full">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="first_name">First name <span className="text-rose-500">*</span></Label>
                <Input type="text" id="first_name" onChange={updateFields} placeholder="Input First name" />
                {<DisplayErrors fieldErrors={errors.first_name}/>}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="last_name">Last name <span className="text-rose-500">*</span></Label>
                <Input type="text" id="last_name" onChange={updateFields} placeholder="Input last name" />
                {<DisplayErrors fieldErrors={errors.last_name}/>}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email_address">Email address <span className="text-rose-500">*</span></Label>
                <Input type="email" id="email_address" onChange={updateFields} placeholder="Input Email address" />
                {<DisplayErrors fieldErrors={errors.email_address}/>}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="contact_number">Contact number</Label>
                <Input type="text" id="contact_number" onChange={updateFields} placeholder="Input Contact Number" />
                {<DisplayErrors fieldErrors={errors.contact_number}/>}
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
  }
)

export default AddDialog