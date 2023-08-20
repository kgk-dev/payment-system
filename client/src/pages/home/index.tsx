import { Grid } from '@mui/material'
import CurveImg from './curveImg'
import Header from './header'
import Cards from './cards'
import AboutUs from './aboutUs'
import SecurityTips from './securityTips'
import Feedbacks from './feedbacks'

export default function Home() {
  return (
    <Grid container direction='column' gap={7} marginTop={9}>
      <CurveImg />
      <Header />
      <Cards />
      <AboutUs />
      <SecurityTips />
      <Feedbacks />
    </Grid>
  )
}
