import { Grid, IconButton, Typography } from "@mui/material"
import WarningIcon from '@mui/icons-material/Warning';

const images = [
  "https://wavemoney.com.mm/assets/img/keep-your-pin-safe.png",
  "https://wavemoney.com.mm/assets/img/do-not-share-your-OTP@2x.png",
  "https://wavemoney.com.mm/assets/img/beware-img@2x.png"
]

const titles = [
  "KEEP YOUR PIN SAFE",
  "DO NOT SHARE YOUR OTP WITH ANYONE",
  "BEWARE OF FRAUDSTERS",
]

const messages = [
  "Your 6-digit PIN is set to protect every transaction you make via Pay account. To secure your Pay account, do not share your PIN with anyone.",
  "OTP is a 6-digit system generated temporary secret code automatically sent via SMS. To secure your Pay account, do not share your OTP with anyone.",
  "Fraudsters can be anywhere! Keep your Transaction ID, Secret Code, PIN, OTP, mobile number and your personal information safe.",
]

type TipProps = {
  image: string
  title: string
  message: string
}

function ShowRight({ image, title, message }: TipProps) {
  return (
    <Grid item container justifyContent={"center"} gap={15}>
      <Grid item>
        <img src={image} style={{
          height: "350px",
          width: "500px",
        }} />
      </Grid>
      <Grid
        item
        container
        height={400}
        width={500}
        direction={"column"}
        gap={5}
      >
        <Grid item>
          <Typography
            variant="h5"
            component={"h5"}
            fontWeight={"bold"}
            color={"primary.main"}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant={"subtitle1"}
            component={"p"}
            fontWeight={"bold"}
            fontSize={22}
            textAlign={"justify"}
          >
            {message}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

function ShowLeft({ image, title, message }: TipProps) {
  return (
    <Grid item container justifyContent={"center"} gap={15}>
      <Grid
        item
        container
        height={400}
        width={500}
        direction={"column"}
        gap={5}
      >
        <Grid item>
          <Typography
            variant="h5"
            component={"h5"}
            fontWeight={"bold"}
            color={"primary.main"}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant={"subtitle1"}
            component={"p"}
            fontWeight={"bold"}
            fontSize={22}
            textAlign={"justify"}
          >
            {message}
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <img src={image} style={{
          height: "350px",
          width: "500px",
        }} />
      </Grid>
    </Grid>
  )
}

export default function SecurityTips() {
  return (
    <Grid
      item
      container
      justifyContent="center"
      gap={6}
    >
      <IconButton sx={{
        alignItems: "center"
      }}>
        <WarningIcon sx={{ color: "error.main", scale: "2" }} />
      </IconButton>
      <Typography
        variant="h3"
        component={"h3"}
        fontWeight={"bold"}
        color={"error.main"}
      >
        Security Tips!
      </Typography>
      <Grid item container direction={"column"} gap={7}>
        {
          messages.map((msg, index) => (
            index % 2
              ? <ShowLeft
                key={msg}
                message={msg}
                image={images[index]}
                title={titles[index]}
              />
              : <ShowRight
                key={msg}
                message={msg}
                image={images[index]}
                title={titles[index]}
              />
          ))
        }
      </Grid>
    </Grid>
  )
}