import { AppBar, Toolbar, Typography } from '@mui/material'
import "@fontsource/poppins/500.css"

export default function HeaderBar() {
  return (
    <AppBar
      position="relative"
      elevation={0}
      sx={{
        bgcolor: "primary"
      }}
    >
      <Toolbar>
        <Typography
          variant='h5'
          fontSize={28}
          fontFamily="poppins"
          color="white"
        >
          User Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  )
}