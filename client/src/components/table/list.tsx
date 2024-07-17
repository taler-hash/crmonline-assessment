import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'

export default function List() {
  return (
    <div className="mt-5 rounded-md border border-gray-300 h-[calc(100%-4rem)]">
      <table className="overflow-auto w-full">
        <thead>
          <tr className="border-b">
            <th className="p-2">#</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email Address</th>
            <th className="p-2">Contact Number</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b text-center">
            <td className="p-4">1</td>
            <td className="p-4 font-medium">Jurie Tylier Pedrogas</td>
            <td className="p-4">juriepedrogas@gmail.com</td>
            <td className="p-4">+639915549012</td>
            <td className="p-4 w-full flex justify-center">
              <div className="flex items-center gap-x-2">
                <button className="btn-warning">
                  <PencilIcon className='size-5' />
                </button>
                <button className="btn-destroy">
                  <TrashIcon className='size-5' />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}