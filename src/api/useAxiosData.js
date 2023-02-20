import axios from 'axios'
import { useState, useEffect } from 'react'

const useAxiosData = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const useAxios = async () => {
      try {
        setLoading(true)
        const response = await axios.get(url)
        setData(response.data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    useAxios()
  }, [url])
  return { data, loading, error }
}

export default useAxiosData
