import * as Alert from "../ui/alert-dialog"
import { UserPlusIcon } from '@heroicons/react/24/solid'
import { Button } from '../ui/button'
import { Input } from "../ui/input"
import { Label } from "../ui/label"

export default function AddDialog() {
  return (
    <Alert.AlertDialog>
      <Alert.AlertDialogTrigger>
        <Button variant="outline" className="btn-destroy p-2">
          <UserPlusIcon className='size-5' />
        </Button>
      </Alert.AlertDialogTrigger>
      <Alert.AlertDialogContent className="w-96">
        <Alert.AlertDialogHeader>
          <Alert.AlertDialogTitle>Add Customer</Alert.AlertDialogTitle>
          <Alert.AlertDialogDescription>
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
          </Alert.AlertDialogDescription>
        </Alert.AlertDialogHeader>
        <Alert.AlertDialogFooter>
          <Alert.AlertDialogCancel>Cancel</Alert.AlertDialogCancel>
          <Alert.AlertDialogAction>Submit</Alert.AlertDialogAction>
        </Alert.AlertDialogFooter>
      </Alert.AlertDialogContent>
    </Alert.AlertDialog>
  )
}