import theme from './theme'
import { Container, ThemeProvider } from '@mui/material'
import Home from './home'
import UserInfoProvider from '../../providers/userInfoProvider'

export default function UserDashboard() {
  return (
    <ThemeProvider theme={theme}>
      <UserInfoProvider>
        <Container style={{
          background: "red",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
        >
          <Home />
        </Container>
      </UserInfoProvider>
    </ThemeProvider>
  )
}