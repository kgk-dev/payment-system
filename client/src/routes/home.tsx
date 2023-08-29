import { RouteObject } from 'react-router-dom'
import MainHome from '../pages/website'
import Features from '../pages/features'
import Aboutus from '../pages/aboutUs'
import Home from '../pages/home'
import Error from '../pages/error'

const router: RouteObject = {
  path: '/',
  element: <MainHome />,
  errorElement: <Error />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/features',
      element: <Features />,
    },
    {
      path: '/aboutus',
      element: <Aboutus />,
    },
  ],
}

export default router