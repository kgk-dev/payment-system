import { Send } from "@mui/icons-material";
import { Box, TextField, Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useFormik } from "formik";
import { socket } from "./socket";
import { useState } from "react";

export default function Chatting() {
  const [messages, setMesssages] = useState<string[]>([])

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: (values, { setValues }) => {
      console.log("values: ", values)
      socket.emit('message', { message: values.message })
      setValues({ message: "" })
    }
  })
  socket.on('message', (data) => {
    setMesssages([...messages, data.message])
  })
  return (
    <Box
      height="100%"
      width="100%"
      bgcolor="white"
      display="flex"
      flexDirection="column"
    >
      <Box
        height="100%"
        bgcolor={blue[50]}
        overflow="auto"
      >
        {
          messages.map((msg) => <p key={msg}>{msg}</p>)
        }
      </Box>
      <form
        onSubmit={formik.handleSubmit}
        method="post"
        style={{
          display: "flex",
        }}
      >
        <TextField
          fullWidth
          size='small'
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Button
          disableElevation
          type="submit"
          variant="contained"
          endIcon={<Send />}>
          sent
        </Button>
      </form>
    </Box>
  )
}