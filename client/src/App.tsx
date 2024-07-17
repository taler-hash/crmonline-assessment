import Table from "./components/table"
import { Toaster } from "./components/ui/toaster"

export default function App() {
  return(
    <main className={`relative w-full h-screen bg-gray-100 text-gray-700`}>
        <section className="w-full h-full grid place-items-center p-2">
          <div className="w-full xl:w-[54rem]  h-96 border rounded-md shadow bg-white">
            <Table />
          </div>
        </section>
        <Toaster />
    </main>
  )
}