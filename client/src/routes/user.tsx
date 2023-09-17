import { RouteObject } from 'react-router-dom'
import UserDashboard from '../pages/userDashboard'
import Transfer from '../pages/userDashboard/transfer'
import Step1,
{ action as Action1 }
  from '../pages/userDashboard/transfer/step1'
import Step2,
{ action as Action2 }
  from '../pages/userDashboard/transfer/step2'
import Step3,
{ action as Action3 }
  from '../pages/userDashboard/transfer/step3'
import Last,
{ action as Action4 }
  from '../pages/userDashboard/transfer/last'
import Profile from '../pages/userDashboard/profile'
import Error from '../pages/error'
import Transactions from '../pages/userDashboard/transactions'
import Feedback from '../pages/userDashboard/feedback'
import { LogoutAction } from '../pages/userDashboard/home/sidenav'

const router: RouteObject = {
  path: '/users',
  element: <UserDashboard />,
  errorElement: <Error />,
  children: [
    {
      path: '/users',
      action: LogoutAction,
      element: <Profile />
    },
    {
      path: '/users/feedback',
      element: <Feedback />
    },
    {
      path: '/users/history',
      element: <Transactions />
    },
    {
      path: '/users/transfer',
      element: <Transfer />,
      children: [
        {
          path: '/users/transfer',
          action: Action1,
          element: <Step1 />,
        },
        {
          path: '/users/transfer/2',
          action: Action2,
          element: <Step2 />
        },
        {
          path: '/users/transfer/3',
          action: Action3,
          element: <Step3 />
        },
        {
          path: '/users/transfer/4',
          action: Action4,
          element: <Last />
        },
      ]
    },
  ]
}

export default router 