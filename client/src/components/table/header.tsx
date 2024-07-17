import AddDialog from './addDialog'
import { UserPlusIcon } from '@heroicons/react/24/solid'
import { Input } from "../ui/input"
import { Button } from '../ui/button'
import { useRef } from 'react'
import axios from '@/axios'

export default function Header() {
  interface AddDialogProps {
    handleOpen: () => void,
  }
  const ad = useRef<AddDialogProps | null>(null)

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
          <Input type="text" placeholder='Search...' />
        </div>
      </div>
      <AddDialog ref={ad}/>
    </>
  )
}