import { Box, Button } from "@mui/material"
import { Link } from "react-router-dom"

export default function Buttons() {
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      flexGrow={1}
      mr={2}
      gap={2}
    >
      <Link
        to="/login"
        className="login"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="signup"
      >
        Signup
      </Link>
    </Box >
  )
}