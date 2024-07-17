import { UserPlusIcon } from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <div className=" flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <p className="font-bold text-2xl">Customers</p>
        <button className="btn-success">
          <UserPlusIcon className='size-5' />
        </button>
      </div>
      <div className="">
        <input type="text" className='p-1.5 px-4 border border-gray-300 rounded-md font-medium' placeholder='Search...'/>
      </div>
    </div>
  )
}