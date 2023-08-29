import { AppBar, Toolbar, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import "@fontsource/poppins/500.css"

export default function HeaderBar() {
  return (
    <AppBar
      position="relative"
      elevation={0}
      sx={{
        bgcolor: "#453e3c"
      }}
    >
      <Toolbar>
        <Typography
          variant='h5'
          fontSize={28}
          fontFamily="poppins"
          color={blue[400]}
        >
          Admin Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  )
}