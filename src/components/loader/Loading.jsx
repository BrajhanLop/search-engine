import { FaSpinner } from 'react-icons/fa'
const Loading = () => {
  return (
        <div className="flex justify-center items-center h-screen w-full">
            <FaSpinner className="text-gray-500 text-6xl animate-spin" />
        </div>
  )
}

export default Loading
