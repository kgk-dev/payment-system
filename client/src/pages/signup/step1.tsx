import { Box, Button, TextField, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useSubmit } from 'react-router-dom'

const validationSchema = yup.object({
  phno: yup
    .string()
    .matches(/^9[0-9]{3}[0-9]{6}$/, 'Invalid phone number')
    .required('Phone number is required')
})

export default function SignupStep1() {
  const submit = useSubmit()
  return (
    <>
      <Typography variant='h5' fontWeight='bold'>
        Sing Up For Pay
      </Typography>
      <Typography variant='subtitle1' mt={1} mb={7}>
        First, add your mobile phone number
      </Typography>
      <Formik
        initialValues={{
          phno: ''
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          submit(values, { method: 'post' })
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
                id='phno'
                name='phno'
                label='Phone Number'
                value={values.phno}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phno && Boolean(errors.phno)}
                helperText={touched.phno && errors.phno}
              />
            </Box>
            <Button type='submit' variant='contained'>
              continue
            </Button>
          </form>
        )}
      </Formik >
    </>
  )
}