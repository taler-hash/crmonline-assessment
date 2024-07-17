import UpdateDialog from './updateDialog'
import * as Table from "../ui/table"
import DeleteDialog from './deleteDialog'

export default function List() {
  return (
    <div className="mt-5 rounded-md h-[calc(100%-4rem)]">
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
            <Table.TableRow>
              <Table.TableCell className="font-medium">1</Table.TableCell>
              <Table.TableCell>Jurie Tylier Pedrogas</Table.TableCell>
              <Table.TableCell>juriepedrogas@gmail.com</Table.TableCell>
              <Table.TableCell className="text-right">+639915549012</Table.TableCell>
              <Table.TableCell>
                <div className="flex items-center gap-x-2">
                  <UpdateDialog />
                  <DeleteDialog />
                </div>
              </Table.TableCell>
            </Table.TableRow>
          </Table.TableBody>
        </Table.Table>
      </div>


    </div>
  )
}