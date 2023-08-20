import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header'
import Footer from '../../components/footer'

const Home = () => {
  return (
    <Grid container direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <Outlet />
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  )
}

export default Home