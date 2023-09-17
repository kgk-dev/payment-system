import { useEffect, useState } from 'react'
import Transaction, { TransactionType } from './transaction'
import { API } from '../../../api'
import {
  Box,
  Checkbox,
  FormControlLabel,
} from '@mui/material'

type TransactionValues = {
  sent: TransactionType[],
  received: TransactionType[],
}

export default function Transactions() {
  const [select, setSelect] = useState({
    sent: false,
    received: false,
  })
  const [transactions, setTransactions] = useState<TransactionValues>({
    sent: [],
    received: [],
  })
  const [allTransactions, setAllTransactions] = useState<TransactionType[]>([])

  useEffect(() => {
    API.get('/users/transactions')
      .then((res) => {
        console.log(res.data)
        setTransactions({
          sent: res.data.sent,
          received: res.data.received
        })
        setAllTransactions(
          [...res.data.sent, ...res.data.received]
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        )
      })
      .catch((error) => {
        console.log("Transaction error: ", error)
      })
  }, [])
  return (
    <Box>
      <form
        style={{
          display: 'flex',
          gap: 20,
          marginLeft: 20,
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              name="sent"
              checked={select.sent}
              onChange={() => setSelect({
                sent: !select.sent,
                received: false
              })}
            />
          }
          label="Sent"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="received"
              checked={select.received}
              onChange={() => setSelect({
                sent: false,
                received: !select.received
              })}
            />
          }
          label="Received"
        />
      </form>
      <Box
        component='div'
        height="80vh"
        overflow="auto"
      >
        {
          select.sent && !select.received
            ? (
              transactions.sent.map((transaction) => {
                return <Transaction {...transaction} />
              })
            ) : select.received && !select.sent
              ? (
                transactions.received.map((transaction) => {
                  return <Transaction {...transaction} />
                })
              ) : (
                allTransactions.map((transaction) => {
                  return <Transaction {...transaction} />
                })
              )
        }
      </Box>
    </Box>
  )
}