import Header from "./header"
import List from "./list"

export default function Table() {

  return (
    <div className="w-full h-full overflow-hidden p-4 px-8">
      <Header />
      <List />
    </div>
  )
}