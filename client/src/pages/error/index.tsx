import { Box, Button, Typography } from '@mui/material'
import { Link, useRouteError } from 'react-router-dom'

export default function Error() {
  const error = useRouteError()
  return (
    <Box
      position='relative'
      display='flex'
      flexDirection='column'
      textAlign='center'
      alignItems='center'
      top={200}
    >
      <Typography variant='h4' fontWeight='bold'>
        Oops!
      </Typography>
      <Typography variant='body1'>
        Sorry, unexpected error has occured.
      </Typography>
      <Typography variant='body1'>
        <i>
          {error?.statusText || error?.message}
        </i>
      </Typography>
      <Link
        to="/"
        style={{
          border: "1px solid grey",
          width: '10rem',
          margin: 20,
          color: "grey",
        }}
      >
        Go to home
      </Link>
    </Box>
  )
}