import { Box, Grid, ThemeProvider } from '@mui/material'
import HeaderBar from './headerbar'
import SideNav from './sidenav'
import { Outlet } from 'react-router-dom'
import { grey } from '@mui/material/colors'
import theme from './theme'

export default function Dashboard() {
  return (
    <ThemeProvider theme={theme} >
      <Box
        bgcolor={"red"}
        minHeight="100vh"
      >
        <HeaderBar />
        <Grid item container height="90%">
          <Grid item xs={3}>
            <SideNav />
          </Grid>
          <Grid
            xs={9}
            item
            bgcolor="#453e3c"
            padding={1}
          >
            <Box
              height="90vh"
              bgcolor={grey[400]}
              padding={1}
            >
              <Outlet />
            </Box >
          </Grid>
        </Grid>
      </Box >
    </ThemeProvider >
  )
}