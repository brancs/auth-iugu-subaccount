import { RouterProvider } from 'react-router-dom'
import routerConfig from './routes/routerConfig'

function App() {
  return (
    <RouterProvider router={routerConfig} />
  )
}

export default App
