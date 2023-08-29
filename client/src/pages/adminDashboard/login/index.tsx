import {
  Box,
  Button,
  Paper,
  TextField,
  ThemeProvider,
  Typography
} from '@mui/material'
import { useFormik } from 'formik'
import theme from '../theme'
import { Navigate } from 'react-router-dom'
import { API } from '../../../api'
import { useState } from 'react'

export default function AdminLogin() {
  const [isLogin, setIsLogin] = useState(false)
  const formik = useFormik({
    initialValues: {
      userId: '',
      password: '',
    },
    onSubmit: ({ userId, password }) => {
      API.post('/admin/login', { userId, password })
        .then((data) => {
          console.log("data", data)
          setIsLogin(true)
        })
        .catch((error) => {
          console.log("[error] admin login", error)
        })
    }
  })

  return (
    <ThemeProvider theme={theme}>
      {isLogin && (
        <Navigate to="/admin" replace={true} />
      )}
      <Box
        height='100vh'
        display='flex'
        flexDirection='column'
        alignItems='center'
        textAlign='center'
        justifyContent='center'
      >
        <Paper elevation={5} sx={{
          width: '400px',
          height: '400px',
          padding: 3,
        }}>
          <Typography variant='h6'>
            Log In
          </Typography>
          <form
            onSubmit={formik.handleSubmit}
            method='post'
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 40,
            }}
          >
            <TextField
              margin='normal'
              name='userId'
              label='UserId'
              value={formik.values.userId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <TextField
              type='password'
              margin='normal'
              name='password'
              label='Password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Button
              variant='contained'
              type='submit'
            >
              Login
            </Button>
          </form>
        </Paper>
      </Box>
    </ThemeProvider>
  )
}