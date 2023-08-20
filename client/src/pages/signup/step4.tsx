import {
  Box,
  Button,
  IconButton,
  MenuItem,
  TextField,
  Typography
} from "@mui/material"
import { Formik } from "formik"
import * as yup from "yup"
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import { useSubmit } from "react-router-dom"

const gender = ["Male", "Female"]
const stateNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const district = [
  "TASANA",
  "KABALA",
  "KATHNA",
  "KHAOOTA",
  "KHAOONA",
  "DAPAYA",
  "SALAKA",
].sort()

const validationSchema = yup.object({
  fullname: yup
    .string()
    .required("Enter your name"),
  gender: yup
    .string()
    .required("Please select your gender"),
  stateNo: yup
    .string()
    .required("*****"),
  district: yup
    .string()
    .required("*****"),
  registerNo: yup
    .string()
    .matches(/[0-9]{6}/, "Invalid registration number")
    .required("Enter your registration number"),
  address: yup
    .string()
    .required("Enter your actual address")
})

export default function SignupStep4() {
  const submit = useSubmit()
  return (
    <>
      <Typography variant="h6" fontWeight="bold" textAlign="center" mb={7}>
        Fill the following forms
      </Typography>
      <Formik
        initialValues={{
          fullname: "",
          gender: "",
          stateNo: "",
          district: "",
          registerNo: "",
          address: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          submit(values, { method: "post" })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          // isSubmitting,
        }) => (
          <form method="post" onSubmit={handleSubmit} style={{
            width: "27rem",
          }}>
            <TextField
              fullWidth
              id="fullname"
              label="Fullname"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.fullname && Boolean(errors.fullname)}
              helperText={touched.fullname && errors.fullname}
              sx={{ minHeight: "5rem" }}
            />
            <TextField
              fullWidth
              select
              id="gender"
              name="gender"
              label="Gender"
              value={values.gender}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.gender && Boolean(errors.gender)}
              helperText={touched.gender && errors.gender}
              sx={{ minHeight: "5rem", textAlign: "start" }}
            >
              {gender.map((g) => (
                <MenuItem key={g} value={g}>
                  {g}
                </MenuItem>
              ))}
            </TextField>
            <Box display="flex" component="div" minHeight="5rem">
              <TextField
                select
                id="stateNo"
                name="stateNo"
                value={values.stateNo}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.stateNo && Boolean(errors.stateNo)}
                helperText={touched.stateNo && errors.stateNo}
                sx={{ width: 70 }}
              >
                {stateNums.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                defaultValue="/"
                disabled
                sx={{ maxWidth: 40 }}
              />
              <TextField
                select
                id="district"
                name="district"
                value={values.district}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.district && Boolean(errors.district)}
                helperText={touched.district && errors.district}
                sx={{
                  width: 150
                }}
              >
                {district.map((dis) => (
                  <MenuItem key={dis} value={dis}>
                    {dis}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                defaultValue="(N)"
                disabled
                sx={{
                  width: 60
                }}
              />
              <TextField
                id="registerNo"
                label="Register Number"
                name="registerNo"
                value={values.registerNo}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.registerNo && Boolean(errors.registerNo)}
              />
            </Box>
            <TextField
              fullWidth
              id="address"
              name="address"
              label="Address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.address && Boolean(errors.address)}
              helperText={touched.address && errors.address}
              sx={{ minHeight: "5rem" }}
            />
            <div style={{ background: "lightgray" }}>
              <IconButton sx={{
                height: "100px",
                width: "100px",
                margin: 15,
              }}>
                <AddAPhotoIcon sx={{
                  scale: "5"
                }} />
              </IconButton>
            </div>
            <TextField
              fullWidth
              type="file"
              id="nrcFront"
              name="nrcFront"
              helperText="Please select NRC front photo"
            />
            <hr />
            <div style={{ background: "lightgray" }}>
              <IconButton sx={{
                height: "100px",
                width: "100px",
                margin: 15,
              }}>
                <AddAPhotoIcon sx={{
                  scale: "5"
                }} />
              </IconButton>
            </div>
            <TextField
              fullWidth
              type="file"
              id="nrcBack"
              name="nrcBack"
              helperText="Please select NRC back photo"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ alignSelf: "center" }}
            >
              continue
            </Button>
          </form>
        )}
      </Formik>
    </>
  )
}