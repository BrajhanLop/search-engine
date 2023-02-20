
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Home from '../pages/home/Home'
import NotFound from '../pages/notFound/NotFound'
import Results from '../pages/result/Results'

const SearchEngineRouter = () => {
  return (
        <>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/results" element={ <Results/> } />
            <Route path="*" element={ <NotFound/>} />
          </Routes>
          <Footer/>
        </>
  )
}

export default SearchEngineRouter
