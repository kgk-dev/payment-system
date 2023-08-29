import { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { useFormik } from 'formik'

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([])

  const formik = useFormik({
    initialValues: {
      message: ""
    },
    onSubmit: (values, { setValues }) => {
      console.log("values", values)
      setValues({ message: "" })
    }
  })

  return (
    <Box
      height="88vh"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box
        height="90vh"
        flexGrow={1}
        overflow='scroll'
      >
        <div>
          {
            messages.map((msg, index) => <p key={index}>{msg}</p>)
          }
        </div>
      </Box>
      <form
        onSubmit={formik.handleSubmit}
        method='post'
        style={{
          position: "relative",
          display: 'flex',
        }}
      >
        <TextField
          fullWidth
          name='message'
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='Type here'
        />
        <Button variant='contained' type='submit'>
          send
        </Button>
      </form>
    </Box>
  )
}

export default Chat