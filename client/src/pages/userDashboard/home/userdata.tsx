import { AccountCircle } from '@mui/icons-material'
import { Grid, IconButton, Typography } from '@mui/material'
import Features from './features'
import { UserInfo } from '../../../providers/userInfoProvider'
import { Link } from 'react-router-dom'

const UserData = ({ name, balance, phoneNumber }: UserInfo) => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <IconButton
          LinkComponent={Link}
          to="/users"
          style={{
            marginTop: 15,
            height: '2rem',
            width: '2rem',
          }}
        >
          <AccountCircle style={{ scale: '2' }} />
        </IconButton>
      </Grid>
      <Grid item>
        <Typography variant='h6' fontWeight='bold'>
          {name}
        </Typography>
        <Typography variant='subtitle1'>
          {balance} <span style={{ fontSize: '0.7rem' }}>kyat</span>
        </Typography>
      </Grid>
      <Grid
        item
        flexGrow={1}
        mr={4}
        display='flex'
        justifyContent='end'
        alignItems='center'
        textAlign='center'
      >
        <Features />
      </Grid>
    </Grid>
  )
}

export default UserData
