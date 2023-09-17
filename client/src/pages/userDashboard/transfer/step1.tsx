import { Box, Button, TextField } from "@mui/material"
import { useFormik } from "formik"
import { redirect, useSubmit } from "react-router-dom"
import { API } from "../../../api"
import {
  TransferContextValue,
  useTransfer
} from "../../../providers/transferProvider"
import { errorNotify, warnNotify } from "../../../components/notify"
import { ToastContainer } from "react-toastify"
import * as yup from 'yup'
import { UserInfoContextValues, useUserInfo } from "../../../providers/userInfoProvider"

export function action() {
  return redirect("/users/transfer/2",)
}

const validationSchema = yup.object({
  receiver: yup
    .string()
    .matches(/09[0-9]{9}/, 'Invalid phone number')
    .required('Phone number is required')
})

const Step1 = () => {
  const { userInfo } = useUserInfo() as UserInfoContextValues
  const { setTransferData } = useTransfer() as TransferContextValue
  const submit = useSubmit()
  const formik = useFormik({
    initialValues: {
      receiver: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const receiver = values.receiver.trim().replace("0", "+95")
      console.log(receiver, userInfo.phoneNumber)
      if (receiver === userInfo.phoneNumber) {
        warnNotify("Please, enter receiver phone number")
      } else {
        API.post("/transfer", { receiver })
          .then(() => {
            setTransferData({ receiver, amount: 0 })
            submit(null, { method: "post" })
          })
          .catch(() => {
            errorNotify("Receiver phone number isn't correct.")
          })
      }
    }
  })

  return (
    <>
      <ToastContainer />
      <form
        method="post"
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
        <Box minHeight="6rem">
          <TextField
            fullWidth
            margin="normal"
            name="receiver"
            label="Receiver's Number"
            placeholder="09"
            value={formik.values.receiver}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.receiver && Boolean(formik.errors.receiver)}
            helperText={formik.touched.receiver && formik.errors.receiver}
          />
        </Box>
        <Button type="submit" variant="contained">continue</Button>
      </form>
    </>
  )
}

export default Step1 