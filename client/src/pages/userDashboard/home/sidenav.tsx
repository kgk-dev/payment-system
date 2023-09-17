import { Button, Stack } from '@mui/material'
import {
  Feedback,
  History,
  Person,
  SyncAlt
} from '@mui/icons-material'
import { FormEvent } from 'react'
import { API } from '../../../api'
import NavItem from './navItem'
import { UserInfoContextValues, useUserInfo } from '../../../providers/userInfoProvider'
import { redirect, useSubmit } from 'react-router-dom'

export function LogoutAction() {
  return redirect('/')
}

export default function SideNav() {
  const { setUserInfo } = useUserInfo() as UserInfoContextValues
  const submit = useSubmit()

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
          Transfer Money
        </NavItem>
        <NavItem to='/users/history'>
          <History sx={{
            color: "primary.main",
            marginRight: 3
          }} />
          Transaction History
        </NavItem>
        <NavItem to='/users/feedback'>
          <Feedback sx={{
            color: "primary.main",
            marginRight: 3
          }} />
          Feedback
        </NavItem>
      </Stack>
      <form
        onSubmit={(event: FormEvent) => {
          event.preventDefault()
          API.get('/logout')
            .then(() => {
              console.log("Loggint out...")
              setUserInfo({
                name: "",
                balance: 0,
                phoneNumber: "",
              })
              submit(null, { method: 'post' })
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
            marginBottom: 10
          }}
        >
          Logout
        </Button>
      </form>
    </nav>
  )
}