import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import Root from './root'
import Settings from './settings'

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'settings',
        element: <Settings />
      }
    ]
  },
])

export default routerConfig