import { Box, Button, TextField, Typography } from "@mui/material"
import { useSubmit } from "react-router-dom"
import { grey } from "@mui/material/colors"
import { Formik } from "formik"
import * as yup from "yup"

const validationSchema = yup.object({
  phoneNumber: yup
    .string()
    .matches(/^9[0-9]{3}[0-9]{6}$/, "Invalid phone number")
    .required("Phone number is required")
})

export default function LoginStep1() {
  const submit = useSubmit()
  return (
    <>
      <Typography variant="h5" fontWeight="bold" mt={1} mb={7}>
        Login
      </Typography>
      <Formik
        initialValues={{
          phoneNumber: ""
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          submit(values, { method: "post" })
          // setSubmitting(true)
          // axios({
          //   method: "post",
          //   baseURL: "http://localhost:3000",
          //   url: "/login",
          //   data: { phoneNumber: values.phoneNumber }
          // })
          //   .then((res) => {
          //     console.log("data: ", res.data)
          //     submit(values, { method: "post" })
          //   })
          //   .catch(() => {
          //     setSubmitting(false)
          //   })
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
            <Box display="flex" justifyContent="center" minHeight="5rem">
              <Typography variant="h6" sx={{
                background: grey[400],
                fontSize: "1rem",
                width: "3rem",
                height: "3rem",
                lineHeight: "3rem",
                border: "1px solid blue",
                borderRadius: 1,
              }}>
                +95
              </Typography>
              <TextField
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                helperText={touched.phoneNumber && errors.phoneNumber}
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
      </Formik >
    </>
  )
}