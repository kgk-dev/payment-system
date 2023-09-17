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
import { API } from '../../../api'
import { redirect, useSubmit } from 'react-router-dom'

export function action() {
  return redirect("/admin")
}

export default function AdminLogin() {
  const submit = useSubmit()
  const formik = useFormik({
    initialValues: {
      adminId: '',
      password: '',
    },
    onSubmit: ({ adminId, password }) => {
      API.post('/admin/login', { adminId, password })
        .then((data) => {
          console.log("data", data)
          submit(null, { method: "post" })
        })
        .catch((error) => {
          console.log("[error] admin login", error)
        })
    }
  })

  return (
    <ThemeProvider theme={theme}>
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
              name='adminId'
              label='UserId'
              value={formik.values.adminId}
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