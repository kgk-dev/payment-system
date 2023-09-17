import { Box, Button, IconButton, InputAdornment, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { API } from '../../../api'
import UserUI from './userUI'
import { useFormik } from 'formik'
import { Clear } from '@mui/icons-material'
import RegisteredUserUI from './registeredUserUI'
import { errorNotify } from '../../../components/notify'
import { ToastContainer } from 'react-toastify'

export type User = {
  userId: string
  name: string
  gender: string
  address: string
}

export type UserDetail = {
  name: string
  gender: string
  address: string
  phoneNumber: string
  balance: number
  password: string
}

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([])
  const [user, setUser] = useState<UserDetail>()
  const formik = useFormik({
    initialValues: {
      phoneNumber: ""
    },
    onSubmit: ({ phoneNumber }) => {
      phoneNumber = "+95" + phoneNumber,
        API.post('/admin/search', { phoneNumber })
          .then((res) => {
            const userInfo = res.data.user
            setUser({
              name: userInfo.user.name,
              gender: userInfo.user.gender,
              address: userInfo.user.address,
              phoneNumber: userInfo.id,
              balance: userInfo.balance,
              password: userInfo.password,
            })
          })
          .catch((error) => {
            console.log("error: ", error)
            errorNotify('Invalid Phone Number. User Not Found')
          })
    }
  })

  useEffect(() => {
    API.get('/admin/unregisteredUsers')
      .then((res) => {
        console.log("data in user management admin", res.data)
        setUsers([...res.data])
      })
      .catch((error) => {
        console.log("error in user management admin", error)
      })
  }, [])

  return (
    <Box>
      <ToastContainer />
      <form
        onSubmit={formik.handleSubmit}
        method='post'
        style={{
          display: 'flex',
          gap: 20,
          marginLeft: 20,
        }}
      >
        <TextField
          size="small"
          name="phoneNumber"
          label="Phone number"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  onClick={() => {
                    formik.setFieldValue("phoneNumber", "")
                    setUser({})
                  }}
                >
                  <Clear />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <Button type='submit' variant='contained'>
          Search
        </Button>
      </form>
      <Box
        component="div"
        height={"80vh"}
        overflow="auto"
      >
        {
          users.length !== 0
            ? users.map((user) => <UserUI key={user.userId} {...user} />)
            : user?.name && (<RegisteredUserUI {...user} />)
        }
      </Box>
    </Box>
  )
}