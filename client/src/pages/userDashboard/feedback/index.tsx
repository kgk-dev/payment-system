import {
  Box,
  Button,
  TextField,
  Typography
} from "@mui/material";
import { UserInfoContextValues, useUserInfo } from "../../../providers/userInfoProvider";
import { useState } from "react";
import { API } from "../../../api";
import { errorNotify, successNotify, warnNotify } from "../../../components/notify";
import { ToastContainer } from "react-toastify";

export default function Feedback() {
  const [feedback, setFeedback] = useState<string>('')
  const { userInfo } = useUserInfo() as UserInfoContextValues

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <ToastContainer />
      <Typography variant="h5" fontWeight='bold' color={"primary"}>
        You can send feedback to us.
      </Typography>
      <form
        method="post"
        onSubmit={(e) => {
          e.preventDefault()
          if (feedback)
            API.post('/users/feedbacks', {
              name: userInfo.name,
              feedback,
            })
              .then(() => {
                successNotify('Successfully sent feedback')
                setFeedback('')
              })
              .catch(() => {
                errorNotify('Something wrong.')
                setFeedback('')
              })
          else
            warnNotify("Empyt feedback cannot be sent")
        }}
        style={{
          width: "40rem",
          marginTop: 30,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <TextField
          fullWidth
          multiline
          autoFocus
          margin="normal"
          minRows={5}
          value={feedback}
          placeholder="Some feedback"
          onChange={(e) => setFeedback(e.target.value)}
        />
        <Button
          variant="contained"
          type="submit"
        >
          Send
        </Button>
      </form>
    </Box>
  )
}