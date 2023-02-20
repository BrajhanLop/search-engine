import { GlobalContext } from './GlobalContext'
import { useState } from 'react'
// eslint-disable-next-line react/prop-types
const GlobalProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setlimit] = useState(10)
  const captureValue = (value) => {
    setSearchValue(value)
  }

  return (
        <GlobalContext.Provider value={{ captureValue, searchValue, currentPage, setCurrentPage, limit, setlimit }}>
            {children}
        </GlobalContext.Provider>
  )
}

export default GlobalProvider
