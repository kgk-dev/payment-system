import { PropsWithChildren, createContext, useContext, useState } from 'react'

export type OTPContextValue = {
  OTP: string
  setOTP: (newOTP: string) => void
}

const OTPContext = createContext<OTPContextValue | null>(null)

export default function OTPProvider({ children }: PropsWithChildren) {
  const [OTP, setOTP] = useState<string>("")

  return (
    <OTPContext.Provider value={{ OTP, setOTP }}>
      {children}
    </OTPContext.Provider>
  )
}

export function useOTP() {
  return useContext(OTPContext)
}
