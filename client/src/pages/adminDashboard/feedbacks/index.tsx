import { useEffect, useState } from "react"
import Feedback, { FeedbackProps } from "./feedback"
import { API } from "../../../api"
import { Box } from "@mui/material"

export default function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState<FeedbackProps[]>([])

  useEffect(() => {
    API.get("/admin/feedbacks")
      .then((res) => {
        setFeedbacks([...res.data.feedbacks])
      })
      .catch((error) => {
        console.log("error in admin feedback", error)
      })
  }, [])

  return (
    <Box
      component={'div'}
      height="80vh"
      overflow="auto"
    >
      {
        feedbacks.map((feedback) =>
          <Feedback key={feedback.id} {...feedback} setFeedbacks={setFeedbacks} />)
      }
    </Box>
  )
}