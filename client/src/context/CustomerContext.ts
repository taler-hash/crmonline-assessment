import { createContext } from 'react'

interface CustomerContextProps {
  renderList: () => void
}

const CustomerContext = createContext<CustomerContextProps>({
  renderList: () => {}
})

export default CustomerContext