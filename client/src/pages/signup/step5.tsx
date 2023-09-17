import { Formik } from "formik";
import { API } from "../../api";
import { Box, Button, IconButton, TextField } from "@mui/material";
import { AddAPhoto } from '@mui/icons-material'
import { useSubmit } from "react-router-dom";
 
export default function SignupStep5() {
  const submit = useSubmit()

  return (
    <Formik
      initialValues={{
        nrcFront: null,
        nrcBack: null,
      }}
      onSubmit={(values) => {
        console.log("images: ", values)
        const formData = new FormData()
        formData.append('nrcFront', values.nrcFront)
        formData.append('nrcBack', values.nrcBack)
        API.post('signup/5', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        })
          .then((res) => {
            console.log(res)
            submit(null, { method: 'post' })
          })
          .catch((error) => {
            console.log(error)
          })
      }}
    >
      {
        ({
          values,
          // errors,
          // touched,
          handleSubmit,
          setFieldValue,
        }) => (
          <form
            method="post"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <Box
              height={400}
              width={540}
              bgcolor={'lightgrey'}
              display='flex'
              justifyContent='center'
            >
              {
                values.nrcFront
                  ? (
                    <img
                      src={URL.createObjectURL(values.nrcFront)}
                      style={{
                        marginTop: 50,
                        height: "15rem",
                        width: "27rem",
                      }} />
                  ) : (
                    <IconButton>
                      <AddAPhoto sx={{
                        scale: "5"
                      }} />
                    </IconButton>
                  )
              }
            </Box>
            <TextField
              fullWidth
              type="file"
              id="nrcFront"
              name="nrcFront"
              helperText="Please select NRC front photo"
              onChange={(event) => {
                setFieldValue('nrcFront', event.currentTarget.files[0])
              }}
            />
            <hr />
            <Box
              height={400}
              width={540}
              bgcolor={'lightgrey'}
              display='flex'
              justifyContent='center'
            >
              {
                values.nrcBack
                  ? (
                    <img
                      src={URL.createObjectURL(values.nrcBack)}
                      style={{
                        marginTop: 50,
                        height: "15rem",
                        width: "27rem",
                      }} />
                  ) : (
                    <IconButton>
                      <AddAPhoto sx={{
                        scale: "5"
                      }} />
                    </IconButton>
                  )
              }
            </Box>
            <TextField
              fullWidth
              type="file"
              id="nrcBack"
              name="nrcBack"
              helperText="Please select NRC back photo"
              onChange={(event) => {
                setFieldValue("nrcBack", event.currentTarget.files[0])
              }}
            />
            <Button type="submit" variant="contained">Submit</Button>
          </form>
        )
      }
    </Formik >
  )
}