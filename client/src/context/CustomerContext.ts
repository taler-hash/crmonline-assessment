import { createContext } from 'react'
import { filterProps } from '@/types/customerTypes'

interface CustomerContextProps {
  renderList: (filter: filterProps) => void
}

const CustomerContext = createContext<CustomerContextProps>({
  renderList: () => {}
})

export default CustomerContext