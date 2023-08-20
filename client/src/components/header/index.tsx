import './styles.css'
import { AppBar, Toolbar } from '@mui/material'
import Links from './links'
import Buttons from './buttons'
import Logo from '../logo'

export default function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        bgcolor: "white"
      }}
    >
      <Toolbar disableGutters>
        <Logo />
        <Links />
        <Buttons />
      </Toolbar>
    </AppBar>
  )
}