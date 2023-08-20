import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import './styles.css'
import { Avatar, Box, Grid, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const fds = [
  {
    name: "Name One",
    img: "Image",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eveniet a at, architecto vitae, nostrum sapiente velit quisquam sed enim quae aut explicabo aspernatur fugit! Temporibus porro optio beatae maiores."
  },
  {
    name: "Name Two",
    img: "Image",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nam quod iure nulla iusto, natus, cumque et officiis rem quae dolores, suscipit accusantium minima! Rerum voluptates pariatur voluptatum quaerat nobis."
  },
  {
    name: "Name Three",
    img: "Image",
    msg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus hic dolor inventore magni animi tenetur asperiores unde quisquam ex quos."
  },
  {
    name: "Name Four",
    img: "Image",
    msg: "Accusantium iste sit mollitia accusamus. Quia veniam soluta cumque. Eum repellat ex, iste, nesciunt corporis repellendus iure expedita, eligendi aperiam quos unde."
  },
  {
    name: "Name Five",
    img: "Image",
    msg: "Soluta, ducimus adipisci recusandae nisi nihil numquam dicta quos quia unde ipsam omnis exercitationem ut sunt, dolorem impedit. Cumque deleniti modi eveniet."
  },
]

type FeedbackCardProps = {
  name: string
  image: string
  msg: string
}

function FeedbackCard({ image, name, msg }: FeedbackCardProps) {
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
        <Avatar>
          <AccountCircleIcon sx={{
            scale: "1.5"
          }} />
        </Avatar>
      </Grid>
      <Grid item>
        {msg}
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
            fds.map((fd) => (
              <SwiperSlide key={fd.msg}>
                <FeedbackCard
                  image={fd.img}
                  name={fd.name}
                  msg={fd.msg}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Box>
    </Grid>
  )
}
