import { Button, Stack } from '@mui/material'
import {
  Chat,
  Group,
  Person,
  SyncAlt
} from '@mui/icons-material'

import NavItem from './navItem'

export default function SideNav() {
  return (
    <nav style={{
      height: '100%',
      background: "#453e3c",
      paddingTop: 10,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
    >
      <Stack>
        <NavItem to='/admin'>
          <Person sx={{ marginRight: 3 }} />
          Profile
        </NavItem>
        <NavItem to='/admin/transactions'>
          <SyncAlt sx={{ marginRight: 3 }} />
          Transactions
        </NavItem>
        <NavItem to='/admin/userManagments'>
          <Group sx={{ marginRight: 3 }} />
          User Management
        </NavItem>
        <NavItem to='/admin/chat'>
          <Chat sx={{ marginRight: 3 }} />
          Chat
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