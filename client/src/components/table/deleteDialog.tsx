import * as Alert from "../ui/alert-dialog"
import { TrashIcon } from '@heroicons/react/24/solid'

export default function DeleteDialog() {
  return (
    <Alert.AlertDialog>
      <Alert.AlertDialogTrigger>
          <TrashIcon className='size-5 text-rose-500' />
      </Alert.AlertDialogTrigger>
      <Alert.AlertDialogContent>
        <Alert.AlertDialogHeader>
          <Alert.AlertDialogTitle>Delete Customer</Alert.AlertDialogTitle>
          <Alert.AlertDialogDescription>
            Are you sure you want to delete Customer.
          </Alert.AlertDialogDescription>
        </Alert.AlertDialogHeader>
        <Alert.AlertDialogFooter>
          <Alert.AlertDialogCancel>Cancel</Alert.AlertDialogCancel>
          <Alert.AlertDialogAction className="bg-rose-500 hover:bg-rose-600">Delete</Alert.AlertDialogAction>
        </Alert.AlertDialogFooter>
      </Alert.AlertDialogContent>
    </Alert.AlertDialog>
  )
}