import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const { limit, setlimit } = useContext(GlobalContext)
  const pages = []
  if (limit > totalPages) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
  } else {
    for (let i = (limit - 9); i <= limit; i++) {
      pages.push(i)
    }
  }

  return (
        <nav className="flex justify-center mt-4">
        <ul className="pagination">
          <button className='inline-block mx-1 px-3 py-1 rounded-full cursor-pointer hover:bg-indigo-800 hover:text-white' onClick={() => setlimit(limit - 1)} disabled={currentPage === 1 || pages[0] === 1}> {'<<'}</button >
          {pages.map((page) => (
            <li
              key={page}
              className={`${
                page === currentPage
                  ? 'bg-indigo-800 text-white'
                  : 'bg-white text-gray-700'
              } inline-block mx-1 px-3 py-1 rounded-full cursor-pointer hover:bg-indigo-800 hover:text-white`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </li>
          ))}
          <li className='inline-block mx-1 px-3 py-1 rounded-full cursor-pointer hover:bg-indigo-800 hover:text-white' onClick={() => setlimit(limit + 1)}>{'>>'}</li>
        </ul>
      </nav>
  )
}

export default Pagination
