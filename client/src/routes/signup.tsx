import { RouteObject } from 'react-router-dom'
import Signup from '../pages/signup'
import SignupStep1 from '../pages/signup/step1'
import * as actions from '../pages/signup/actions'
import SignupStep2 from '../pages/signup/step2'
import SignupStep3 from '../pages/signup/step3'
import SignupStep4 from '../pages/signup/step4'
import Last from '../pages/signup/step5'

const router: RouteObject = {
  path: '/signup',
  element: <Signup />,
  children: [
    {
      path: '/signup',
      action: actions.one,
      element: <SignupStep1 />,
    },
    {
      path: '/signup/2',
      action: actions.two,
      element: <SignupStep2 />
    },
    {
      path: '/signup/3',
      action: actions.three,
      element: <SignupStep3 />
    },
    {
      path: '/signup/4',
      action: actions.four,
      element: <SignupStep4 />
    },
    {
      path: '/signup/5',
      action: actions.five,
      element: <Last />
    },
  ]
}

export default router