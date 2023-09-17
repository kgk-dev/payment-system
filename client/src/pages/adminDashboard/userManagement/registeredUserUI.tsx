import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { UserDetail } from './index'
import { API } from '../../../api'
import { errorNotify, successNotify } from '../../../components/notify'
import { ToastContainer } from 'react-toastify'

export default function RegisteredUserUI(user: UserDetail) {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='end'
    >
      <ToastContainer />
      <TableContainer component={Paper} elevation={0} sx={{
        mt: 3,
        mb: 1,
      }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Name</TableCell>
              <TableCell align='center'>Gender</TableCell>
              <TableCell align='center'>Address</TableCell>
              <TableCell align='center'>Phone Number</TableCell>
              <TableCell align='center'>Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align='center'>
                {user.name}
              </TableCell>
              <TableCell align='center'>
                {user.gender}
              </TableCell>
              <TableCell align='center'>
                {user.address}
              </TableCell>
              <TableCell align='center'>
                {user.phoneNumber}
              </TableCell>
              <TableCell align='center'>
                {user.balance}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={() => {
          API.get(`/admin/users/${user.phoneNumber}/delete`)
            .then(() => {
              successNotify('Successfully deleted')
            })
            .catch(() => {
              errorNotify('Something wrong')
            })
        }}
        variant='contained'
        color='error'
      >
        delete account
      </Button>
    </Box>
  )
}