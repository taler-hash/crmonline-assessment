import AddDialog from './addDialog'
import { UserPlusIcon } from '@heroicons/react/24/solid'
import { Input } from "../ui/input"
import { Button } from '../ui/button'
import { useRef, KeyboardEvent, useContext } from 'react'
import CustomerContext from '@/context/CustomerContext'

export default function Header() {
  const cs = useContext(CustomerContext)

  interface AddDialogProps {
    handleOpen: () => void,
  }
  const ad = useRef<AddDialogProps | null>(null)

  function handleSearch(e:KeyboardEvent<HTMLInputElement>) {
    if(e.key === "Enter") {
      const target = e.target as HTMLInputElement

      cs.renderList({searchstring: target.value})
    }
  }

  return (
    <>
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <p className="font-bold text-2xl">Customers</p>
          <Button onClick={() => ad.current!.handleOpen()} variant="ghost" className='p-2'>
            <UserPlusIcon className='size-5 text-green-500' />
          </Button>
        </div>
        <div className="">
          <Input type="text" onKeyDown={handleSearch} placeholder='Search... and Enter' />
        </div>
      </div>
      <AddDialog ref={ad}/>
    </>
  )
}