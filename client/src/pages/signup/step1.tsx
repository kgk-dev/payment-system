import { Box, Button, TextField, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useSubmit } from 'react-router-dom'
import { API } from '../../api'
import { OTPContextValue, useOTP } from '../../providers/otpProvider'
import { errorNotify } from '../../components/notify'
import { ToastContainer } from 'react-toastify'

const validationSchema = yup.object({
  phoneNumber: yup
    .string()
    .matches(
      /^(7[7-9])|(9[5-9])|(6[6-9])|(2[5-7])|(4[0-5])[0-9]{7}/,
      'Invalid phone number')
    .required('Phone number is required')
})

export default function SignupStep1() {
  const submit = useSubmit()
  const { setOTP } = useOTP() as OTPContextValue

  return (
    <>
      <ToastContainer />
      <Typography variant='h5' fontWeight='bold'>
        Sing Up For Pay
      </Typography>
      <Typography variant='subtitle1' mt={1} mb={7}>
        First, add your mobile phone number
      </Typography>
      <Formik
        initialValues={{
          phoneNumber: ''
        }}
        validationSchema={validationSchema}
        onSubmit={({ phoneNumber }, { setSubmitting }) => {
          setSubmitting(true)
          API.post('/signup',
            {
              phoneNumber: "+95" + phoneNumber
            })
            .then((res) => {
              setOTP(res.data.otp)
              setSubmitting(false)
              submit(null, { method: 'post' })
            })
            .catch(() => {
              setSubmitting(false)
              errorNotify("Invalid Phone Number")
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
          isSubmitting,
        }) => (
          <form method='post' onSubmit={handleSubmit}>
            <Box display='flex' justifyContent='center' minHeight='5rem'>
              <Typography variant='h6' sx={{
                background: grey[400],
                fontSize: '1rem',
                width: '3rem',
                height: '3rem',
                lineHeight: '3rem',
                border: '1px solid blue',
                borderRadius: 1,
              }}>
                +95
              </Typography>
              <TextField
                id='phoneNumber'
                name='phoneNumber'
                label='Phone Number'
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                helperText={touched.phoneNumber && errors.phoneNumber}
              />
            </Box>
            <Button type='submit'
              variant='contained'
              disabled={isSubmitting}
            >
              continue
            </Button>
          </form>
        )}
      </Formik >
    </>
  )
}