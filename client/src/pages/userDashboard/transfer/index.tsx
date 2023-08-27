import { Outlet } from "react-router-dom"
import TransferProvider from "../../../providers/transferProvider"

const Transfer = () => {
  return (
    <TransferProvider>
      <Outlet />
    </TransferProvider>
  )
}

export default Transfer
