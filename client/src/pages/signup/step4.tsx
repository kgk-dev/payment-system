import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography
} from "@mui/material"
import { Formik } from "formik"
import * as yup from "yup"
import { useSubmit } from "react-router-dom"
import { API } from "../../api"

const gender = ["Male", "Female"]
const stateNums = "1,2,3,4,5,6,7,8,9,10,11,12,13,14".split(',')
const district = [
  "TASANA",
  "KABALA",
  "KATHNA",
  "KHAOOTA",
  "KHAOONA",
  "DAPAYA",
  "SALAKA",
  "YAMAPA",
  "YAOONA",
  "WALANA",
  "AYATA",
  "HAMALA",
  "MAKANA",
  "SAKANA",
  "BATALA",
  "MAMANA",
  "TAMANA",
  "MALANA",
  "THAPHAYA",
].sort()

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Enter your name"),
  gender: yup
    .string()
    .required("Please select your gender"),
  state: yup
    .string()
    .required("*****"),
  district: yup
    .string()
    .required("*****"),
  registerNumber: yup
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
          name: "",
          gender: "",
          state: "",
          district: "",
          registerNumber: "",
          address: "",
          nrcFront: "",
          nrcBack: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          API.post('/signup/4', { values })
            .then(() => {
              submit(values, { method: "post" })
            })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          // setFieldValue,
          // isSubmitting,
        }) => (
          <form
            encType="multipart/form-data"
            method="post"
            onSubmit={handleSubmit}
            style={{
              width: "27rem",
            }}>
            <TextField
              fullWidth
              id="name"
              label="FullName"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
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
                id="state"
                name="state"
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.state && Boolean(errors.state)}
                helperText={touched.state && errors.state}
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
                  width: 70
                }}
              />
              <TextField
                id="registerNumber"
                label="Register Number"
                name="registerNumber"
                value={values.registerNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.registerNumber &&
                  Boolean(errors.registerNumber)}
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
            <Button
              type="submit"
              variant="contained"
              sx={{ alignSelf: "center" }}
            >
              submit
            </Button>
          </form>
        )}
      </Formik >
    </>
  )
}