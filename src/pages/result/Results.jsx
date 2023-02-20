import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import useAxiosData from '../../api/useAxiosData'
import CardItem from '../../components/CardItem/CardItem'
import Input from '../../components/Input/Input'
import Loading from '../../components/loader/Loading'
import Pagination from '../../components/Pagination/Pagination'
import { GlobalContext } from '../../context/GlobalContext'

const Results = () => {
  const { searchValue, currentPage, setCurrentPage, setlimit } = useContext(GlobalContext)
  const navigate = useNavigate()
  const apiKey = import.meta.env.VITE_API_KEY
  const { data, loading, error } = useAxiosData(`https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=${searchValue}&limit=30&offset=${(currentPage - 1) * 30}`)
  const goToHome = () => {
    navigate('/')
  }
  const totalPages = Math.round(Number(data?.pagination.total_count) / 30)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    setlimit(pageNumber + 9)
    window.scrollTo(0, 0)
  }

  return (
    <div className='flex flex-col items-center pt-2 bg-bgHome p-4 min-h-screen'>
      <div className=' w-full flex justify-around'>
        <h2 className='font-Righteous text-5xl text-center text-indigo-800 cursor-pointer' onClick={goToHome}>Stick</h2>
        <Input />
      </div>

      {
        loading
          ? <Loading />
          : <div className='mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            {
              searchValue === null
                ? <h2>Todavia no ingresastes nada para tu busqueda</h2>
                : data?.data.map(dat => (
                  <CardItem key={dat.id} dat={dat} />
                ))
            }
          </div>
      }

      <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />

    </div>
  )
}

export default Results
