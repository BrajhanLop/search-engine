import { useContext } from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalContext'

const Input = () => {
  const { captureValue } = useContext(GlobalContext)
  const navigate = useNavigate()

  const handleSearching = (e) => {
    e.preventDefault()
    const value = e.target.inputSearch.value
    captureValue(value)
    navigate('/results')
  }
  return (
      <>
        <form className='w-3/5 relative' onSubmit={handleSearching}>
          <input type="text" name='inputSearch' className="form-input h-12 w-full p-2 bg-white rounded-xl border shadow-md text-gray-700" placeholder="¿Qué sticker está buscando?" />
          <HiMagnifyingGlass className=' absolute right-3 bottom-3 text-2xl '/>
        </form>
      </>
  )
}

export default Input
