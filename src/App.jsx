import { BrowserRouter } from 'react-router-dom'
import SearchEngineRouter from './routes/SearchEngineRouter'

function App () {
  return (
    <BrowserRouter>
      <SearchEngineRouter />
    </BrowserRouter>
  )
}

export default App
