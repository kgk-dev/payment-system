import { RouteObject } from "react-router-dom";
import UserDashboard from "../pages/userDashboard";
import Transfer from "../pages/userDashboard/transfer";
import Step1,
{ action as Action1 }
  from "../pages/userDashboard/transfer/step1";
import Step2,
{ action as Action2 }
  from "../pages/userDashboard/transfer/step2";
import Step3,
{ action as Action3 }
  from "../pages/userDashboard/transfer/step3";
import Last, { action as Action4 } from "../pages/userDashboard/transfer/last";
import Profile, { action as ProfileAction } from "../pages/profile";
import Chat from "../pages/chat";

const router: RouteObject = {
  path: '/users',
  element: <UserDashboard />,
  children: [
    {
      path: '/users',
      action: ProfileAction,
      element: <Profile />
    },
    {
      path: "/users/chat",
      element: <Chat />
    },
    {
      path: '/users/transfer',
      element: <Transfer />,
      children: [
        {
          path: "/users/transfer",
          action: Action1,
          element: <Step1 />,
        },
        {
          path: "/users/transfer/2",
          action: Action2,
          element: <Step2 />
        },
        {
          path: "/users/transfer/3",
          action: Action3,
          element: <Step3 />
        },
        {
          path: "/users/transfer/4",
          action: Action4,
          element: <Last />
        },
      ]
    },
  ]
}

export default router 