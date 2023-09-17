import { Grid, Typography } from "@mui/material";

export default function Aboutus() {
  return (
    <Grid
      item
      alignSelf="center"
      alignItems="center"
      textAlign="center"
      width="50%"
      height="85vh"
      padding={10}
      color="#003087"
      marginTop={9}
    >
      <Typography
        variant="h4"
        marginBottom={7}
        fontWeight="bold"
      >
        About Us
      </Typography>
      <Typography
        variant="subtitle1"
      >
        Welcome to Payment System founded in 2023. Our mission is simple: to simplify the complexities of financial transactions, making it easier for our clients to focus on what you do best.
      </Typography>
    </Grid>
  )
}
