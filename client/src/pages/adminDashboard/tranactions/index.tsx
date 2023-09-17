import { useEffect, useState } from 'react'
import Transaction, { TransactionType } from './transaction'
import { API } from '../../../api'
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField
} from '@mui/material'
import { useFormik } from 'formik'
import { Clear } from '@mui/icons-material'

type TransactionsValues = {
  all?: TransactionType[],
  sent?: TransactionType[],
  received?: TransactionType[],
}

export default function Transactions() {
  const [transactions, setTransactions] = useState<TransactionType[]>([])
  const [transactionsById, setTransactionsByID] = useState<TransactionsValues>({
    all: [],
    sent: [],
    received: [],
  })

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      sent: false,
      received: false,
    },
    onSubmit: ({ phoneNumber, sent, received }) => {
      phoneNumber = "+95" + phoneNumber
      API.post(
        '/admin/transactions/userId',
        {
          phoneNumber,
          sent,
          received
        }
      ).then((res) => {
        setTransactionsByID({
          all: [...res.data.sent, ...res.data.received],
          sent: res.data.sent,
          received: res.data.received,
        })
      })
    }
  })

  useEffect(() => {
    API.get(`/admin/transactions`)
      .then((res) => {
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
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  onClick={() => formik.setFieldValue("phoneNumber", "")}
                >
                  <Clear />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formik.values.sent}
              onChange={() => {
                formik.setFieldValue('sent', !formik.values.sent)
                formik.setFieldValue('received', false)
              }}
              name="sent" />
          }
          label="Sent"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formik.values.received}
              onChange={() => {
                formik.setFieldValue('received', !formik.values.received)
                formik.setFieldValue('sent', false)
              }}
              name="received" />
          }
          label="Received"
        />
        <Button type='submit' variant='contained'>
          Search
        </Button>
      </form>
      <Box
        marginTop={1}
        component='div'
        height="80vh"
        overflow="auto"
      >
        {
          formik.values.phoneNumber
            ? (
              formik.values.sent && !formik.values.received
                ? (
                  transactionsById.sent?.map((transaction) => {
                    return <Transaction {...transaction} />
                  })
                ) : formik.values.received && !formik.values.sent
                  ? (
                    transactionsById.received?.map((transaction) => {
                      return <Transaction {...transaction} />
                    })
                  ) : (
                    transactionsById.all?.map((transaction) =>
                      <Transaction {...transaction} />
                    )
                  )
            ) : (
              transactions.map((transaction) => {
                return <Transaction {...transaction} />
              })
            )
        }
      </Box>
    </Box>
  )
}