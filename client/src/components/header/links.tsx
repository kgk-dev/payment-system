import { Box } from "@mui/material"
import { Link } from "react-router-dom"

export default function Links() {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      ml={3}
      gap={3}
    >
      <Link to={"/"}>Home</Link>
      <Link to={"/features"}>Features</Link>
      <Link to={"/aboutus"}>About Us</Link>
    </Box>
  )
}

