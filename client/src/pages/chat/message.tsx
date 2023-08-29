import { useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'

type ReceivedValues = {
  name: string
  message: string
  time: string
}

function formatDateFromTimestamp(timestamp: number) {
  const date = new Date(timestamp);
  return date.toLocaleString();
}

const Messages = ({ socket }: { socket: Socket }) => {
  const [messagesReceived, setMessagesReceived] = useState<ReceivedValues[]>([])
  console.log("In Message")
  useEffect(() => {
    socket.on('message', (data) => {
      console.log("Data is message: ", data)
      setMessagesReceived((state) => [
        ...state,
        {
          name: data.name,
          message: data.message,
          time: formatDateFromTimestamp(data.__createdtime__),
        }])
    })
    return () => {
      console.log("disconnect")
      socket.off('message')
      socket.disconnect()
    }
  }, [socket])

  return (
    <div>
      {
        messagesReceived.map((msg, index) => (
          <div key={index}>
            <p>{msg.message}</p>
            <p>{msg.time}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Messages