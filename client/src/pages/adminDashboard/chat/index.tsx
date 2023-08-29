import { useEffect, useState } from 'react'
import { socket } from './socket'
import { useFormik } from 'formik'
import { Send } from '@mui/icons-material'
import { Box, TextField, Button } from '@mui/material'
import { blue } from '@mui/material/colors'

export default function Chat() {
  // const [messagesEvents, setMessageEvents] = useState<string[]>([])
  const [messages, setMessages] = useState<string[]>([])
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
  useEffect(() => {
    socket.connect();
    console.log("Socket is connected")
    return () => {
      socket.disconnect();
      console.log("Socket is disconnected")
    }
  }, [])

  socket.on('message', (data) => {
    setMessages([...messages, data.message])
  })

  // useEffect(() => {
  //   function onMessageEvents(event: string) {
  //     setMessageEvents((previous) => [...previous, event])
  //   }
  //   socket.on('message', onMessageEvents)
  //   return () => {
  //     socket.off('message', onMessageEvents)
  //   }
  // }, [messagesEvents])

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