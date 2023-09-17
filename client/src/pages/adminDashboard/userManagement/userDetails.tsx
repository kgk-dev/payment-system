import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import { API } from '../../../api'
import { Box, ButtonBase, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import { useEffect, useState } from 'react'

export async function loader(
  { params }: LoaderFunctionArgs
): Promise<UserInfo> {
  const user = await API.get(`/admin/unregisteredUsers/${params.userId}`)
  return user.data
}

export type UserInfo = {
  name: string
  gender: string
  address: string
  phoneNumber: string
  state: string
  district: string
  registerNumber: string
  nrcFront: string
  nrcBack: string
}

export default function UserDetails() {
  const user = useLoaderData() as UserInfo
  const [accept, setAccept] = useState(false)
  const [reject, setReject] = useState(false)

  useEffect(() => {
    if (accept)
      API.get(`/admin/unregisteredUsers/${user.phoneNumber}/accept`)
        .then((res) => {
          console.log("Reject: ", res.data)
        })
        .catch((error) => {
          console.log("Accept error: ", error)
        })
    if (reject)
      API.get(`/admin/unregisteredUsers/${user.phoneNumber}/reject`)
        .then((res) => {
          console.log("Accept: ", res.data)
        })
        .catch((error) => {
          console.log("Reject error: ", error)
        })
  }, [accept, reject])

  return (
    <Box
      height="80vh"
      display="flex"
      flexDirection="column"
      color={blue[700]}
      gap={5}
      overflow="auto"
    >
      <Box
        position="absolute"
        width="13rem"
        right={40}
        display="flex"
        justifyContent="center"
        gap={1}
      >
        {
          accept
            ? (
              <ButtonBase
                sx={{
                  height: "3rem",
                  width: "6rem",
                  lineHeight: "3rem",
                  bgcolor: "success.main",
                  color: "white",
                  fontSize: 24,
                  fontWeight: "bold",
                  borderRadius: 3,
                }}>
                Accepted
              </ButtonBase>
            ) : reject
              ? (
                <ButtonBase
                  sx={{
                    height: "3rem",
                    width: "6rem",
                    lineHeight: "3rem",
                    bgcolor: "error.main",
                    color: "white",
                    fontSize: 24,
                    fontWeight: "bold",
                    borderRadius: 3,
                  }}
                >
                  Rejected
                </ButtonBase>
              )
              : (
                <>
                  <ButtonBase
                    onClick={() => {
                      setAccept(!accept)
                    }}
                    sx={{
                      height: "3rem",
                      width: "6rem",
                      lineHeight: "3rem",
                      bgcolor: "success.main",
                      color: "white",
                      fontSize: 24,
                      fontWeight: "bold",
                      borderRadius: 3,
                    }}
                  >
                    Accept
                  </ButtonBase>
                  <ButtonBase
                    onClick={() => {
                      setReject(!reject)
                    }}
                    sx={{
                      height: "3rem",
                      width: "6rem",
                      lineHeight: "3rem",
                      bgcolor: "error.main",
                      color: "white",
                      fontSize: 24,
                      fontWeight: "bold",
                      borderRadius: 3,
                    }}
                  >
                    Reject
                  </ButtonBase>
                </>
              )
        }
      </Box>
      <Typography variant='h6'>
        {user.name}
      </Typography>
      <Typography variant='h6'>
        {user.gender}
      </Typography>
      <Typography variant='h6'>
        {user.address}
      </Typography>
      <Typography variant='h6'>
        {user.state}/{user.district}(N){user.registerNumber}
      </Typography>
      <Typography variant='h6'>
        {user.phoneNumber}
      </Typography>
      <Box
        position="relative"
        height={400}
        width={540}
        bgcolor={'lightgrey'}
        display='flex'
        justifyContent='center'
        margin={1}
      >
        <img
          src={`http://localhost:3000/nrcimages/${user.nrcFront}`} alt='nrcFrontPhoto'
          style={{
            height: "400px",
          }}
        />
      </Box>
      <Box
        height={400}
        width={540}
        bgcolor={'lightgrey'}
        display='flex'
        justifyContent='center'
        margin={1}
      >
        <img
          src={`http://localhost:3000/nrcimages/${user.nrcBack}`} alt='nrcFrontPhoto'
          style={{
            height: "400px",
          }}
        />
      </Box>
    </Box >
  )
}