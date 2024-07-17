import * as Alert from "../ui/alert-dialog"
import { PencilIcon } from '@heroicons/react/24/solid'
import { Input } from "../ui/input"
import { Label } from "../ui/label"

export default function UpdateDialog() {
  return (
    <Alert.AlertDialog>
      <Alert.AlertDialogTrigger>
        <PencilIcon className='size-5 text-yellow-500' />
      </Alert.AlertDialogTrigger>
      <Alert.AlertDialogContent className="w-96">
        <Alert.AlertDialogHeader>
          <Alert.AlertDialogTitle>Update Customer</Alert.AlertDialogTitle>
          <Alert.AlertDialogDescription>

          </Alert.AlertDialogDescription>
        </Alert.AlertDialogHeader>
        <div className="space-y-4 w-full">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="first_name">First name</Label>
            <Input type="text" id="first_name" placeholder="Input First name" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="last_name">Last name</Label>
            <Input type="text" id="last_name" placeholder="Input last name" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email_address">Email address</Label>
            <Input type="email" id="email_address" placeholder="Input Email address" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="contact_number">Contact number</Label>
            <Input type="text" id="contact_number" placeholder="Input Contact Number" />
          </div>
        </div>
        <Alert.AlertDialogFooter>
          <Alert.AlertDialogCancel>Cancel</Alert.AlertDialogCancel>
          <Alert.AlertDialogAction>Submit</Alert.AlertDialogAction>
        </Alert.AlertDialogFooter>
      </Alert.AlertDialogContent>
    </Alert.AlertDialog>
  )
}