import { useContext } from 'react'
import useAxiosData from '../../api/useAxiosData'
import Input from '../../components/Input/Input'
import { GlobalContext } from '../../context/GlobalContext'

const Results = () => {
  const { searchValue } = useContext(GlobalContext)
  const { data, loading, error } = useAxiosData(`https://api.giphy.com/v1/stickers/search?api_key=y5PuVHwnB0pofSilet40u2bxnghZo8G4&q=${searchValue}`)
  console.log(data)
  return (
    <div className='flex justify-center pt-2'>
      <Input />
    </div>

  )
}

export default Results
