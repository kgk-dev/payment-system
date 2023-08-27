import { Box } from '@mui/material'
import UserData from './userdata'
import { Outlet } from 'react-router-dom'
import {
  UserInfoContextValues,
  useUserInfo
} from '../../../providers/userInfoProvider'

export default function Home() {
  const { userInfo } = useUserInfo() as UserInfoContextValues
  console.log("userinfo in Hmoe", userInfo)

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100%"
    >
      <UserData name={userInfo.name} balance={userInfo.balance} />
      <Box
        display="flex"
        justifyContent="center"
        bgcolor="white"
        height="100%"
        paddingTop={3}
      >
        <Outlet />
      </Box>
    </Box>
  )
}