import { useRef } from "react"
import Header from "./header"
import List from "./list"
import CustomerContext from "@/context/CustomerContext"

export default function Table() {
  interface ListProps {
    initList: () => void,
  }

  const list = useRef<ListProps | null>(null)

  function renderList() {
    list.current?.initList()
  }

  return (
    <div className="w-full h-full overflow-hidden p-4 px-8">
      <CustomerContext.Provider value={{ renderList }}>
        <Header />
        <List ref={list}/>
      </CustomerContext.Provider>
    </div>
  )
}