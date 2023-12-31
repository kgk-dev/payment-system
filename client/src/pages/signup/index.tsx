import { Container, Grid, createTheme, ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Logo from '../../components/logo'
import OTPProvider from '../../providers/otpProvider'

const theme = createTheme()

export default function Signup() {
  return (
    <ThemeProvider theme={theme} >
      <Grid
        container
        direction='column'
        alignItems='center'
      >
        <Grid item mb={5}>
          <Logo />
        </Grid>
        <Grid item>
          <Container
            component='div'
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'primary.main',
            }}
          >
            <OTPProvider>
              <Outlet />
            </OTPProvider>
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
