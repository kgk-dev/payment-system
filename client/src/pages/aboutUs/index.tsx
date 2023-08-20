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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut inventore nostrum asperiores doloribus exercitationem repellendus, eos illum dolor laboriosam accusantium consectetur ipsum distinctio consequatur officia tempora est modi! Animi, repellendus.
      </Typography>
    </Grid>
  )
}
