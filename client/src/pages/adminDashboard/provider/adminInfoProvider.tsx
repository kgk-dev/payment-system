import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'
import { API } from '../../../api'

export type AdminInfo = {
  id: string
}

export type AdminInfoContextType = {
  info: AdminInfo
  setInfo: (newInfo: AdminInfo) => void
}

const AdminInfoContext = createContext<AdminInfoContextType | null>(null)

export default function AdminInfoProvider({ children }: PropsWithChildren) {
  const [info, setInfo] = useState<AdminInfo>({
    id: ""
  })

  useEffect(() => {
    API.get("/admin")
      .then((res) => {
        setInfo({ id: res.data.id })
      })
      .catch((error) => {
        console.log("Error in admin info provider ", error)
      })
  }, [])

  return (
    <AdminInfoContext.Provider value={{ info, setInfo }}>
      {children}
    </AdminInfoContext.Provider>
  )
}

export function useAdmin() {
  return useContext(AdminInfoContext)
}