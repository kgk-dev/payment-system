import { Grid } from "@mui/material"
import AccountFeatures from "./features"

export default function Features() {
  return (
    <Grid
      item
      container
      justifyContent="center"
      gap={20}
      minHeight="85vh"
      bgcolor="#003087"
      color="white"
      padding={10}
      marginTop={9}
    >
      <AccountFeatures />
    </Grid>
  )
}
