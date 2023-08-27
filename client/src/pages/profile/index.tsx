import { Box, Button } from "@mui/material"
import { API } from "../../api"
import { UserInfoContextValues, useUserInfo } from "../../providers/userInfoProvider"
import { redirect, useSubmit } from "react-router-dom"

export function action() {
  return redirect('/login')
}

const Profile = () => {
  const submit = useSubmit()
  const { setUserInfo } = useUserInfo() as UserInfoContextValues
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-around">
      <table border={2} cellSpacing={0}>
        <tr>
          <td>Name</td>
          <td>Mg Kaung Min Htet</td>
        </tr>
        <tr>
          <td>Phone number</td>
          <td>+959777360903</td>
        </tr>
      </table>
      <form
        method="post"
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault()
          API.get('/logout')
            .then(() => {
              setUserInfo({ name: '', balance: 0 })
              submit(null, { method: "post" })
            })
        }}
      >
        <Button type="submit" variant="contained">Logout</Button>
      </form>
    </Box>
  )
}

export default Profile