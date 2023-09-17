import { Box, Button, TextField } from "@mui/material"
import { useFormik } from "formik"
import { redirect, useSubmit } from "react-router-dom"
import { API } from "../../../api"
import { errorNotify } from "../../../components/notify"
import { ToastContainer } from "react-toastify"
import * as yup from "yup"
import {
  TransferContextValue,
  useTransfer
} from "../../../providers/transferProvider"

const validationSchema = yup.object({
  password: yup
    .string()
    .length(6, "Password must be 6 digits")
    .required('Password is required')
})

export function action() {
  return redirect("/users/transfer/4")
}

const Step1 = () => {
  const { transferData } = useTransfer() as TransferContextValue
  const submit = useSubmit()
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: ({ password }) => {
      console.log(password)
      API.post("/transfer/2", { transferData, password })
        .then(() => {
          submit(null, { method: "post" })
        })
        .catch(() => {
          errorNotify("Incorrect password...")
        })
    }
  })

  return (
    <>
      <ToastContainer />
      <form
        autoComplete="off"
        onSubmit={formik.handleSubmit}
        style={{
          marginTop: "5rem",
          height: "20rem",
          width: "20rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box minHeight='6rem'>
          <TextField
            fullWidth
            type="password"
            margin="normal"
            name="password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Box>
        <Button type="submit" variant="contained">continue</Button>
      </form>
    </>
  )
}

export default Step1 