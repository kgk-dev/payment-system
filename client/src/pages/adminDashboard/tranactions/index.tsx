import { useEffect, useState } from 'react'
import Transaction, { TransactionType } from './transaction'
import { API } from '../../../api'
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField
} from '@mui/material'
import { useFormik } from 'formik'

export default function Transactions() {
  const [transactions, setTransactions] = useState<TransactionType[]>([])
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      sent: false,
      received: false,
    },
    onSubmit: (values, { setValues }) => {
      console.log(values)
      setValues({
        phoneNumber: "",
        sent: false,
        received: false,
      })
    }
  })

  useEffect(() => {
    API.get('/admin/transactions')
      .then((res) => {
        console.log('Transactions data: ', res.data)
        setTransactions(res.data.transactions)
      })
      .catch((error) => {
        console.log("Transaction error: ", error)
      })
  }, [])
  return (
    <Box>
      <form
        onSubmit={formik.handleSubmit}
        method='post'
        style={{
          display: 'flex',
          gap: 20,
          marginLeft: 20,
        }}
      >
        <TextField
          size="small"
          name="phoneNumber"
          label="Phone number"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formik.values.sent}
              onChange={formik.handleChange}
              name="sent" />
          }
          label="Sent"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formik.values.received}
              onChange={formik.handleChange}
              name="received" />
          }
          label="Received"
        />
        <Button type='submit' variant='contained'>
          Search
        </Button>
      </form>
      <Box
        component='div'
        height="70vh"
        overflow="auto"
      >
        {
          transactions.map((transaction) => {
            return <Transaction {...transaction} />
          })
        }
      </Box>
    </Box>
  )
}