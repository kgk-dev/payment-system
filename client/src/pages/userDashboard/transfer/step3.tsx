import { Button, TextField } from "@mui/material"
import { useFormik } from "formik"
import { redirect, useSubmit } from "react-router-dom"
import { API } from "../../../api"
import {
  TransferContextValue,
  useTransfer
} from "../../../providers/transferProvider"

export function action() {
  return redirect("/users/transfer/4")
}

const Step1 = () => {
  const { transferData } = useTransfer() as TransferContextValue
  const submit = useSubmit()
  const formik = useFormik({
    initialValues: {
      password: ""
    },
    onSubmit: ({ password }) => {
      API.post("/transaction/2", { transferData, password })
        .then((res) => {
          console.log("[step3] transfer: ", res.data)
          submit(null, { method: "post" })
        })
        .catch((error) => {
          console.log("[step3] error: ", error)
        })
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
        alignItems: "center",
      }}
    >
      <TextField
        fullWidth
        margin="normal"
        type="password"
        name="password"
        label="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Button type="submit" variant="contained">continue</Button>
    </form>
  )
}

export default Step1 