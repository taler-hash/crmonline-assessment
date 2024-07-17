import Table from "./components/table"

export default function App() {
  return(
    <main className="w-full h-screen bg-gray-100 text-gray-700">
        <section className="w-full h-full grid place-items-center">
          <div className="w-[54rem] h-96 border rounded-md shadow bg-white">
            <Table />
          </div>
        </section>
    </main>
  )
}