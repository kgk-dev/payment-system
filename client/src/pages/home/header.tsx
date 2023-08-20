import { Grid } from "@mui/material"
import happy from '../../assets/happy.png'
import "./styles.css"

export default function Header() {
  return (
    <Grid
      item
      container
      height={500}
      display="flex"
      justifyContent="center"
      bgcolor="#003087"
      color="white"
      gap={10}
    >
      <h5
        className="main-banner"
      >
        Transfer Your Money With Pay
      </h5>
      <img src={happy} alt="homeImage" style={{
        height: 500,
        width: 500,
      }} />
    </Grid>
  )
}