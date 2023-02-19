import { GlobalContext } from './GlobalContext'
import { useState } from 'react'
// eslint-disable-next-line react/prop-types
const GlobalProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState(null)

  const captureValue = (value) => {
    setSearchValue(value)
  }

  return (
        <GlobalContext.Provider value={{ captureValue, searchValue }}>
            {children}
        </GlobalContext.Provider>
  )
}

export default GlobalProvider
