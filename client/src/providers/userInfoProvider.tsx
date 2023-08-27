import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react"
import { API } from "../api"

export type UserInfo = {
  name: string
  balance: number
}

export type UserInfoContextValues = {
  userInfo: UserInfo
  setUserInfo: (newInfo: UserInfo) => void
}

const UserInfoContext = createContext<UserInfoContextValues | null>(null)

const UserInfoProvider = ({ children }: PropsWithChildren) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    balance: 0,
  })

  useEffect(() => {
    try {
      API.get('/userinfo').then((res) =>
        setUserInfo({
          name: res.data.name,
          balance: res.data.balance,
        }))
    } catch (error) {
      console.log("Error in user info: ", error)
    }
  }, [])

  const contextValue = { userInfo, setUserInfo }

  return (
    <UserInfoContext.Provider value={contextValue}>
      {children}
    </UserInfoContext.Provider>
  )
}

export const useUserInfo = () => useContext(UserInfoContext)

export default UserInfoProvider