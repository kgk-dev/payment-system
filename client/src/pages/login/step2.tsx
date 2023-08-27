import {
  Typography,
  TextField,
  Button,
  Box
} from "@mui/material"
import { useSubmit } from "react-router-dom"
import { Formik } from "formik"
import * as yup from "yup"
import { API } from "../../api"

const validationSchema = yup.object({
  otp: yup
    .string()
    .matches(/[0-9]{6}/, "OTP must be 6 numbers")
    .required("OTP is required")
})

export default function LoginStep2() {
  const submit = useSubmit()

  return (
    <>
      <Typography variant="h6" component={"h6"} mb={7}>
        We have sent 6-digit OTP code to your mobile number.
      </Typography>

      <Formik
        initialValues={{
          otp: ""
        }}
        validationSchema={validationSchema}
        onSubmit={({ otp }, { setSubmitting }) => {
          setSubmitting(true)
          API.post('/login/2', { otp })
            .then(() => {
              setSubmitting(false)
              submit(null, { method: "post" })
            })
            .catch((error) => {
              console.log("[Login] error 2", error)
              setSubmitting(false)
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
          <form onSubmit={handleSubmit}>
            <Box minHeight="5rem">
              <TextField
                id="otp"
                name="otp"
                label="6-digit OTP Code"
                value={values.otp}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.otp && Boolean(errors.otp)}
                helperText={touched.otp && errors.otp}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
            >
              continue
            </Button>
          </form>
        )}
      </Formik>
    </>
  )
}
