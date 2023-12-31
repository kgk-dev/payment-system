import { Typography, TextField, Button, Box } from '@mui/material'
import { useSubmit } from 'react-router-dom'
import { Formik } from 'formik'
import * as yup from 'yup'
import { API } from '../../api'
import { OTPContextValue, useOTP } from '../../providers/otpProvider'
import { errorNotify } from '../../components/notify'
import { ToastContainer } from 'react-toastify'

const validationSchema = yup.object({
  otp: yup
    .string()
    .matches(/[0-9]{6}/, 'OTP must be 6 numbers')
    .required('OTP is required')
})

export default function SignupStep2() {
  const submit = useSubmit()
  const { OTP } = useOTP() as OTPContextValue

  return (
    <>
      <ToastContainer />
      <Typography variant='h6' component={'h6'} mb={7}>
        We have sent 6-digit OTP code to your mobile number.
      </Typography>
      <Formik
        initialValues={{
          otp: OTP
        }}
        validationSchema={validationSchema}
        onSubmit={({ otp }, { setSubmitting }) => {
          setSubmitting(true)
          API.post('/signup/2', { otp })
            .then(() => {
              setSubmitting(false)
              submit(null, { method: 'post' })
            })
            .catch((error) => {
              console.log("error in setp2: ", error.message)
              errorNotify("Wrong OTP")
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
                id='otp'
                name='otp'
                label='6-digit OTP Code'
                value={values.otp}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.otp && Boolean(errors.otp)}
                helperText={touched.otp && errors.otp}
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
