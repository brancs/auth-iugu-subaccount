import { createBrowserRouter } from 'react-router-dom'
import Root from './root'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/home'
import Settings from '../pages/settings'

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        path: 'settings',
        element: <Settings />,
        index: true
      }
    ]
  },
])

export default routerConfig