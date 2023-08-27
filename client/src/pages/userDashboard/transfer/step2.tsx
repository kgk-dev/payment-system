import { Button, TextField } from "@mui/material"
import { useFormik } from "formik"
import { redirect, useSubmit } from "react-router-dom"
import { TransferContextValue, useTransfer } from "../../../providers/transferProvider"
import { UserInfoContextValues, useUserInfo } from "../../../providers/userInfoProvider"

export function action() {
  return redirect("/users/transfer/3")
}

const Step1 = () => {
  const { transferData, setTransferData } = useTransfer() as TransferContextValue
  const { userInfo } = useUserInfo() as UserInfoContextValues
  const submit = useSubmit()
  const formik = useFormik({
    initialValues: {
      amount: 0
    },
    onSubmit: ({ amount }) => {
      if (0 < amount && amount <= userInfo.balance) {
        setTransferData({ ...transferData, amount })
        submit(null, { method: "post" })
      }
    }
  })

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        marginTop: "5rem",
        height: "20rem",
        width: "20rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        fullWidth
        name="amount"
        label="Amount"
        value={formik.values.amount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Button type="submit" variant="contained">continue</Button>
    </form>
  )
}

export default Step1 