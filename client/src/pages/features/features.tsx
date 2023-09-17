import WalletIcon from '@mui/icons-material/Wallet'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import HistoryIcon from '@mui/icons-material/History'
import FCard from '../../components/card'
import { Feedback } from '@mui/icons-material'

const features = [
  "E Wallet",
  "Transfer Money",
  "Transaction History",
  "Give Feedback",
]

const logos = [
  WalletIcon,
  AttachMoneyIcon,
  HistoryIcon,
  Feedback,
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