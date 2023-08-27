import { Button, Typography } from "@mui/material"
import { FormEvent } from "react"
import { redirect, Form, useSubmit } from "react-router-dom"
import { TransferContextValue, useTransfer } from "../../../providers/transferProvider"
import { UserInfoContextValues, useUserInfo } from "../../../providers/userInfoProvider"

export async function action() {
  console.log("call action 4")
  return redirect('/users')
}

const Last = () => {
  const submit = useSubmit()
  const { userInfo, setUserInfo } = useUserInfo() as UserInfoContextValues
  const { transferData, setTransferData } = useTransfer() as TransferContextValue
  return (
    <Form
      onSubmit={(e: FormEvent) => {
        e.preventDefault()
        setUserInfo(
          {
            ...userInfo,
            balance: userInfo.balance - transferData.amount
          }
        )
        setTransferData({ ...transferData, amount: 0 })
        submit(null, { method: "post" })
      }}
      method="post"
      style={{
        marginTop: "5rem",
        height: "20rem",
        width: "20rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="body1">
        Successful transfer
      </Typography>
      <Button type="submit" variant="contained">Finish</Button>
    </Form>
  )
}

export default Last