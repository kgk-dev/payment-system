import { Button, TextField } from "@mui/material"
import { useFormik } from "formik"
import { redirect, useSubmit } from "react-router-dom"
import { API } from "../../../api"
import {
  TransferContextValue,
  useTransfer
} from "../../../providers/transferProvider"
export function action() {
  return redirect("/users/transfer/2",)
}

const Step1 = () => {
  const { setTransferData } = useTransfer() as TransferContextValue
  const submit = useSubmit()
  const formik = useFormik({
    initialValues: {
      receiver: ""
    },
    onSubmit: ({ receiver }) => {
      console.log(receiver)
      API.post("/transaction", { receiver })
        .then(() => {
          setTransferData({ receiver, amount: 0 })
          submit(null, { method: "post" })
        })
    }
  })

  return (
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
      <TextField
        fullWidth
        margin="normal"
        name="receiver"
        label="Phone Number"
        value={formik.values.receiver}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Button type="submit" variant="contained">continue</Button>
    </form>
  )
}

export default Step1 