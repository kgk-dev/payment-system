import { Box, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import { UserInfoContextValues, useUserInfo } from '../../../providers/userInfoProvider';

export type TransactionType = {
  id: string;
  amount: number;
  date: string;
  senderId: string;
  receiverId: string;
  senderName: string;
  receiverName: string;
}

export default function Transaction(props: TransactionType) {
  const { userInfo } = useUserInfo() as UserInfoContextValues
  const isSender = userInfo.name === props.senderName

  return (
    <Box
      component="div"
      height={"10rem"}
      bgcolor={blue[50]}
      border="1px solid blue"
      borderRadius={2}
      padding={[3]}
      margin={2}
      display="flex"
      justifyContent="space-between"
    >
      <Box
        position='relative'
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        color={blue[700]}
      >
        <Typography variant='body1' fontWeight={'bold'}>
          {
            isSender ? "Sending" : "Receiving"
          }
        </Typography>
        <Typography variant='body1'>TransactionId: {props.id}</Typography>
        <Typography variant='body1'>Amount: {props.amount} kyat</Typography>
        {
          isSender
            ? (
              <Typography variant='body1'>
                Receiver: {props.receiverName}({props.receiverId})
              </Typography>
            )
            : (
              <Typography variant='body1'>
                Sender: {props.senderName}({props.senderId})
              </Typography>
            )
        }
      </Box>
      <Box>
        <Typography variant='body1'>Date: {new Date(props.date).toDateString()}</Typography>
      </Box>
    </Box>
  )
}