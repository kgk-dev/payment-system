import { Typography, TextField, Button, Box } from '@mui/material'
import { Formik } from 'formik'
import { useSubmit } from 'react-router-dom'
import * as yup from 'yup'
import { API } from '../../api'

const validationSchema = yup.object({
  password: yup
    .string()
    .length(6, "Password must be 6 digits")
    .required('Password is required')
})

export default function SignupStep3() {
  const submit = useSubmit()

  return (
    <>
      <Typography variant='h6' component={'h6'} mb={7}>
        Set  password used for transactions
      </Typography>
      <Formik
        initialValues={{
          password: ''
        }}
        validationSchema={validationSchema}
        onSubmit={({ password }, { setSubmitting }) => {
          setSubmitting(true)
          API.post('/signup/3', { password })
            .then(() => {
              setSubmitting(false)
              submit(null, { method: 'post' })
            })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          // isSubmitting,
        }) => (
          <form method='post' onSubmit={handleSubmit}>
            <Box minHeight='5rem'>
              <TextField
                fullWidth
                type='password'
                id='password'
                name='password'
                label='Password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
            </Box>
            <Button type='submit' variant='contained' >
              continue
            </Button>
          </form>
        )}
      </Formik>
    </>
  )
}