import { useRef } from "react"
import Header from "./header"
import List from "./list"
import CustomerContext from "@/context/CustomerContext"
import { filterProps } from "@/types/customerTypes"

export default function Table() {
  interface ListProps {
    initList: (filter: filterProps) => void,
  }

  const list = useRef<ListProps | null>(null)


  const renderList = (filter: filterProps) => {
    list.current?.initList(filter)
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