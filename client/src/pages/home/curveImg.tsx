import { Grid } from '@mui/material'
import curveImg from '../../assets/background-swirls.png'

export default function CurveImg() {
  return (
    <Grid item sx={{
      position: 'absolute',
      width: '100%',
    }}>
      <img src={curveImg} style={{
        height: 500,
        width: '100%'
      }} />
    </Grid>
  )
}