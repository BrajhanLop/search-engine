
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Results from '../pages/result/Results'

const SearchEngineRouter = () => {
  return (
        <>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/results" element={ <Results/> } />
          </Routes>
        </>
  )
}

export default SearchEngineRouter
