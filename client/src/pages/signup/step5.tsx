import { Grid, Typography, Button } from '@mui/material'
import { Form } from 'react-router-dom'

export default function Last() {
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      height="100%"
      color="primary.main"
      textAlign="center"
      marginTop={20}
      gap={10}
    >
      <Typography variant="h4">
        Thank you for registration. <br />
        After accepting your registartion, <br />
        we'll contact you!
      </Typography>
      <Form method="post">
        <Button type="submit" variant="contained" >
          finish
        </Button>
      </Form>
    </Grid>
  )
}