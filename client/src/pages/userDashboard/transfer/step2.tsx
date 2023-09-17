import { Box, Button, TextField } from "@mui/material"
import { useFormik } from "formik"
import { redirect, useSubmit } from "react-router-dom"
import { TransferContextValue, useTransfer } from "../../../providers/transferProvider"
import { UserInfoContextValues, useUserInfo } from "../../../providers/userInfoProvider"
import { errorNotify } from "../../../components/notify"
import { ToastContainer } from "react-toastify"

export function action() {
  return redirect("/users/transfer/3")
}

const Step1 = () => {
  const { transferData, setTransferData } = useTransfer() as TransferContextValue
  const { userInfo } = useUserInfo() as UserInfoContextValues
  const submit = useSubmit()
  const formik = useFormik({
    initialValues: {
      amount: ""
    },
    onSubmit: (values) => {
      const amount = Number(values.amount)
      if (0 < amount && amount <= userInfo.balance) {
        setTransferData({ ...transferData, amount })
        submit(null, { method: "post" })
      } else {
        errorNotify("Amount is exceed")
      }
    }
  })

  return (
    <>
      <ToastContainer />
      <form
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
            name="amount"
            label="Amount"
            value={formik.values.amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Box>
        <Button type="submit" variant="contained">continue</Button>
      </form>
    </>
  )
}

export default Step1 