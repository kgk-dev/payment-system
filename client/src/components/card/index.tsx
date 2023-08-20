import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  SvgIconTypeMap,
  Typography
} from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

type Props = {
  Logo: OverridableComponent<SvgIconTypeMap<object, "svg">> & { muiName: string }
  content: string
  width: number
  height: number
}

export default function FCard({ Logo, content, width, height }: Props) {
  return (
    <Card sx={{
      width,
      height,
      borderRadius: 7,
      border: '1px solid blue'
    }}>
      <CardHeader
        avatar={
          <Avatar sx={{
            color: 'primary.main',
            bgcolor: 'transparent',
            height: 50,
            width: 50,
            left: 55,
          }}>
            <Logo sx={{
              scale: '1.5'
            }} />
          </Avatar>
        }
      />
      <CardContent
        sx={{
          textAlign: 'center'
        }}
      >
        <Typography
          variant='h6'
          textAlign='center'
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  )
}