import { Box, ButtonBase, Stack, Typography, colors } from '@mui/material'
import { User } from './index'
import { red } from '@mui/material/colors'
import { Link } from 'react-router-dom'

export default function UserUI(props: User) {
  return (
    <Box
      component="div"
      height={"10rem"}
      bgcolor={red[200]}
      border={"1px solid red"}
      borderRadius={2}
      padding={[3]}
      margin={2}
      display="flex"
      justifyContent="space-between"
    >
      <Box display="flex">
        <Stack spacing={1} width={200}>
          <Typography variant='body1'>
            Name
          </Typography>
          <Typography variant='body1'>
            Gender
          </Typography>
          <Typography variant='body1'>
            Address
          </Typography>
          <Typography variant='body1'>
            Phone Number
          </Typography>
        </Stack>
        <Stack spacing={1} width={300} >
          <Typography variant='body1' fontWeight="bold">
            {props.name}
          </Typography>
          <Typography variant='body1' fontWeight="bold">
            {props.gender}
          </Typography>
          <Typography variant='body1' fontWeight="bold">
            {props.address}
          </Typography>
          <Typography variant='body1' fontWeight="bold">
            {props.userId}
          </Typography>
        </Stack>
      </Box>
      <ButtonBase
        LinkComponent={Link}
        to={`/admin/userManagments/${props.userId}`}
        sx={{
          height: "2rem",
          width: "4rem",
          lineHeight: "2rem",
          color: "white",
          border: "1px solid blue",
          borderRadius: 10,
          bgcolor: "secondary.main"
        }}
      >
        Details
      </ButtonBase>
    </Box>
  )
}