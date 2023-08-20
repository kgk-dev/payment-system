import Login from '../pages/login'
import { RouteObject } from 'react-router-dom'
import LoginStep1 from '../pages/login/step1'
import LoginStep2 from '../pages/login/step2'
import * as loginActions from '../pages/login/actions'

const router: RouteObject = {
  path: '/login',
  element: <Login />,
  children: [
    {
      path: '/login',
      action: loginActions.one,
      element: <LoginStep1 />,
    },
    {
      path: '/login/2',
      action: loginActions.two,
      element: <LoginStep2 />,
    },
  ]
}

export default router