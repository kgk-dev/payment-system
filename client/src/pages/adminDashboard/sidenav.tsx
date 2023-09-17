import { Button, Stack } from '@mui/material'
import {
  Feedback,
  Group,
  Person,
  SyncAlt
} from '@mui/icons-material'

import NavItem from './navItem'
import { FormEvent, useState } from 'react'
import { AdminInfoContextType, useAdmin } from './provider/adminInfoProvider'
import { Navigate } from 'react-router-dom'
import { API } from '../../api'

export default function SideNav() {
  const [login, setLogin] = useState(true)
  const { setInfo } = useAdmin() as AdminInfoContextType

  return (
    login ? (
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
          <NavItem to='/admin/feedbacks'>
            <Feedback sx={{ marginRight: 3 }} />
            Feedbacks
          </NavItem>
        </Stack>
        <form
          onSubmit={(event: FormEvent) => {
            event.preventDefault()
            API.get('/admin/logout')
              .then((res) => {
                console.log(res.data.message)
                setInfo({ message: "" })
                setLogin(false)
              })
              .catch((error) => {
                console.log("[error] Logout", error)
              })
          }}
          method='post'
        >
          <Button
            fullWidth
            type='submit'
            variant="contained"
            color='secondary'
            style={{
              marginLeft: 3,
              marginBottom: 10
            }}
          >
            Logout
          </Button>
        </form>
      </nav>
    ) : (
      <Navigate to="/admin/login" replace={true} />
    )
  )
}