import { PropsWithChildren, createContext, useContext, useState } from "react"

export type TransferValue = {
  receiver: string
  amount: number
}

export type TransferContextValue = {
  transferData: TransferValue,
  setTransferData: (newData: TransferValue) => void
}

const TransferContext = createContext<TransferContextValue | null>(null)

const TransferProvider = ({ children }: PropsWithChildren) => {
  const [transferData, setTransferData] = useState<TransferValue>({
    receiver: "",
    amount: 0,
  })

  const contextValue = { transferData, setTransferData }

  return (
    <TransferContext.Provider value={contextValue}>
      {children}
    </TransferContext.Provider>
  )
}

export const useTransfer = () => {
  return useContext(TransferContext)
}

export default TransferProvider