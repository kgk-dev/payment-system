import { Button, Stack } from '@mui/material'
import {
  Group,
  Person,
  SyncAlt
} from '@mui/icons-material'

import NavItem from './navItem'

export default function SideNav() {
  return (
    <nav style={{
      height: '100%',
      paddingTop: 10,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}
    >
      <Stack>
        <NavItem to='/users'>
          <Person sx={{
            color: "primary.main",
            marginRight: 3
          }} />
          Profile
        </NavItem>
        <NavItem to='/users/transfer'>
          <SyncAlt sx={{
            color: "primary.main",
            marginRight: 3
          }} />
          Transfer
        </NavItem>
        <NavItem to='/users'>
          <Group sx={{
            color: "primary.main",
            marginRight: 3
          }} />
          Notifications
        </NavItem>
      </Stack>
      <Button
        variant="contained"
        color='secondary'
        style={{
          marginBottom: 10
        }}
      >
        Logout
      </Button>
    </nav>
  )
}