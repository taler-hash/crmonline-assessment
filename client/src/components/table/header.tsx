import AddDialog from './addDialog'
import { Input } from "../ui/input"


export default function Header() {
  return (
    <div className=" flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <p className="font-bold text-2xl">Customers</p>
        <AddDialog />
      </div>
      <div className="">
        <Input type="text" placeholder='Search...'/>
      </div>
    </div>
  )
}