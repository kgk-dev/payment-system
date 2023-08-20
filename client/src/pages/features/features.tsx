import WalletIcon from '@mui/icons-material/Wallet'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import HistoryIcon from '@mui/icons-material/History'
import ChatIcon from '@mui/icons-material/Chat'
import FCard from '../../components/card'

const features = [
  "E Wallet",
  "Transfer Money",
  "Transaction History",
  "Chat"
]

const logos = [
  WalletIcon,
  AttachMoneyIcon,
  HistoryIcon,
  ChatIcon,
]

export default function AccountFeatures() {
  return (
    <>
      {
        features.map((feature, index) => (
          <FCard
            content={feature}
            Logo={logos[index]}
            width={230}
            height={200}
          />
        ))
      }
    </>
  )
}