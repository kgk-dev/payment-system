import { Box, Typography } from "@mui/material"
import { UserInfoContextValues, useUserInfo } from "../../../providers/userInfoProvider"
import { Person } from "@mui/icons-material"

const Profile = () => {
  const { userInfo } = useUserInfo() as UserInfoContextValues

  // useEffect(() => {
  //   API.get('/userinfo')
  //     .then((res) => {
  //       setUserInfo({
  //         name: res.data.name,
  //         balance: res.data.balance,
  //         phoneNumber: res.data.phoneNumber,
  //       })
  //     })
  //     .catch((error) => {
  //       console.log("Error in user Provider: ", error)
  //     })
  // }, [])

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <div style={{
        marginTop: 50,
        height: "5rem",
        width: "5rem",
      }}
      >
        <Person sx={{
          color: "primary.main",
          scale: "5"
        }} />
      </div>
      <div>
        <Typography
          variant='h6'
          fontWeight="bold"
          fontSize={20}
        >
          {userInfo.name}
        </Typography>
        <p>My Balance: {userInfo.balance} Kyat</p>
        <p>Phone Number: {userInfo.phoneNumber}</p>
      </div>
    </Box>
  )
}

export default Profile