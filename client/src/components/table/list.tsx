import { TrashIcon } from '@heroicons/react/24/solid'
import UpdateDialog from './updateDialog'
import { Button } from '../ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"
import DeleteDialog from './deleteDialog'

export default function List() {
  return (
    <div className="mt-5 rounded-md h-[calc(100%-4rem)]">
      <div className="h-full overflow-auto">
        <Table>
          <TableCaption>A list recent customers .</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email Address</TableHead>
              <TableHead>Contact Number</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Jurie Tylier Pedrogas</TableCell>
              <TableCell>juriepedrogas@gmail.com</TableCell>
              <TableCell className="text-right">+639915549012</TableCell>
              <TableCell>
                <div className="flex items-center gap-x-2">
                  <UpdateDialog />
                  <DeleteDialog />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>


    </div>
  )
}