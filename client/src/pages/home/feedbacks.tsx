import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import './styles.css'
import { Avatar, Box, Grid, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useEffect, useState } from 'react'
import { API } from '../../api'

type FeedbackCardProps = {
  name: string
  message: string
}

function FeedbackCard({ name, message }: FeedbackCardProps) {
  return (
    <Grid
      container
      direction={"column"}
      alignItems={"center"}
      height={"100%"}
      width={"78%"}
      justifyContent={"center"}
      gap={5}
      color={"white"}
    >
      <Grid item>
        <Avatar sx={{
          height: "4rem",
          width: "4rem",
        }}>
          <AccountCircleIcon sx={{
            scale: "3"
          }} />
        </Avatar>
      </Grid>
      <Grid item>
        {message}
      </Grid>
      <Grid item>
        <Typography variant='h6'>
          {name}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState<FeedbackCardProps[]>([])

  useEffect(() => {
    API.get('/feedbacks')
      .then((res) => {
        console.log(res.data.feedbacks)
        setFeedbacks([...res.data.feedbacks])
      })
      .catch((error) => {
        console.log("Error in feedback: ", error)
      })
  }, [])

  return (
    <Grid item height={500} >
      <Box
        position="absolute"
        component="div"
        height={500}
        width="100%"
        bgcolor="primary.main"
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {
            feedbacks.map((feedback) => (
              <SwiperSlide key={feedback.message}>
                <FeedbackCard
                  name={feedback.name}
                  message={feedback.message}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Box>
    </Grid>
  )
}
