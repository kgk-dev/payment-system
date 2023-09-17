import theme from './theme'
import { ThemeProvider } from '@mui/material'
import Home from './home'
import UserInfoProvider from '../../providers/userInfoProvider'
export default function UserDashboard() {
  return (
    <ThemeProvider theme={theme}>
      <UserInfoProvider>
        <Home />
      </UserInfoProvider>
    </ThemeProvider >
  )
}