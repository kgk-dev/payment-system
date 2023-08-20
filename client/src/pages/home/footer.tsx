import { Grid, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <Grid
      item
      container
      justifyContent={"space-between"}
    >
      <Grid item>
        <Typography
          variant="subtitle1"
          lineHeight="3rem"
          fontWeight={400}
        >
          Copyright © 2023 Pay Money. All rights reserved.
        </Typography>
      </Grid>
      <Grid item mr={10}>
        <FacebookIcon fontSize="large" color="primary" />
        <TwitterIcon fontSize="large" color="primary" />
        <YouTubeIcon fontSize="large" color="error" />
      </Grid>
    </Grid>
  )
}