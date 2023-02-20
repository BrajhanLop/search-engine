import { BrowserRouter } from 'react-router-dom'
import GlobalProvider from './context/GlobalProvider'
import SearchEngineRouter from './routes/SearchEngineRouter'

function App () {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <SearchEngineRouter />
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
