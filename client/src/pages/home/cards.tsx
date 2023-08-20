import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt'
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt'
import LockResetIcon from '@mui/icons-material/LockReset'
import { Grid } from '@mui/material'
import FCard from '../../components/card'

const logos = [OfflineBoltIcon, AppSettingsAltIcon, LockResetIcon]
const contents = [
  'Instant Money Trasfer',
  'Easy To Use',
  'Protected Password',
]

export default function Cards() {
  return (
    <Grid
      item
      container
      justifyContent='space-evenly'
      position='absolute'
      top={450}
    >
      {
        contents.map((content, index) => (
          <Grid item key={content}>
            <FCard
              Logo={logos[index]}
              content={content}
              height={230}
              width={200}
            />
          </Grid>
        ))
      }
    </Grid>
  )
}
