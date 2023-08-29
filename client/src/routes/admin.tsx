import { RouteObject } from 'react-router-dom'
import Admin from '../pages/adminDashboard'
import Error from '../pages/error'
import Profile from '../pages/adminDashboard/profile'
import Transactions from '../pages/adminDashboard/tranactions'
import UserManagement from '../pages/adminDashboard/userManagement/inde'
import AdminLogin from '../pages/adminDashboard/login'
import Chat from '../pages/adminDashboard/chat'

const router: RouteObject[] = [
  {
    path: '/admin/login',
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
        path: '/admin/userManagments',
        element: <UserManagement />,
      },
      {
        path: '/admin/chat',
        element: <Chat />,
      },
    ],
  }
]

export default router