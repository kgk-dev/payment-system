import { Outlet } from "react-router-dom"
import TransferProvider from "../../../providers/transferProvider"
import { Box } from "@mui/material"

const Transfer = () => {
  return (
    <TransferProvider>
      <Box
        height="100%"
        width="100%"
        display="flex"
        justifyContent="center"
      >
        <Outlet />
      </Box>
    </TransferProvider>
  )
}

export default Transfer
