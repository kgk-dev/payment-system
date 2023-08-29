import { Box, Grid, ThemeProvider } from '@mui/material'
import HeaderBar from './headerbar'
import SideNav from './sidenav'
import { Outlet } from 'react-router-dom'
import { grey } from '@mui/material/colors'
import theme from './theme'
import { useEffect, useState } from 'react'
import { API } from '../../api'

export default function Admin() {
  const [adminInfo, setAdminInfo] = useState("")

  useEffect(() => {
    API.get('/admin')
  })

  return (
    <ThemeProvider theme={theme}>
      <Box height="100vh">
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
              height="100%"
              bgcolor={grey[400]}
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