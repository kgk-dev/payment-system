import { RouteObject } from 'react-router-dom'
import Admin from '../pages/adminDashboard'
import Error from '../pages/error'
import Profile from '../pages/adminDashboard/profile'
import Transactions from '../pages/adminDashboard/tranactions'
import UserManagement from '../pages/adminDashboard/userManagement'
import AdminLogin, { action as LoginAction } from '../pages/adminDashboard/login'
import UserDetails, { loader as UserDetailsLoader } from '../pages/adminDashboard/userManagement/userDetails'
import Feedbacks from '../pages/adminDashboard/feedbacks'

const router: RouteObject[] = [
  {
    path: '/admin/login',
    action: LoginAction,
    element: <AdminLogin />,
  },
  {
    path: '/admin',
    element: <Admin />,
    errorElement: <Error />,
    children: [
      {
        path: '/admin',
        element: <Profile />,
      },
      {
        path: '/admin/transactions',
        element: <Transactions />,
      },
      {
        path: '/admin/feedbacks',
        element: <Feedbacks />,
      },
      {
        path: '/admin/userManagments',
        element: <UserManagement />,
      },
      {
        path: '/admin/userManagments/:userId',
        loader: UserDetailsLoader,
        element: <UserDetails />,
      },
    ],
  }
]

export default router