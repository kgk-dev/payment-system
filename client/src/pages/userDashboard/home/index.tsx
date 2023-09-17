import { Box, Grid, ThemeProvider } from '@mui/material'
import HeaderBar from './headerbar'
import SideNav from './sidenav'
import { Outlet } from 'react-router-dom'
import theme from '../theme'

export default function User() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        minHeight="100vh"
      >
        <HeaderBar />
        <Grid item container height="91vh">
          <Grid item xs={3}>
            <SideNav />
          </Grid>
          <Grid
            xs={9}
            item
            bgcolor="primary.main"
          >
            <Box
              height="100%"
              bgcolor="white"
              padding={1}
            >
              <Outlet />
            </Box >
          </Grid>
        </Grid>
      </Box >
    </ThemeProvider>
  )
}