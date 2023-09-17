import { Box, ButtonBase, Paper, Typography } from "@mui/material"
import { API } from "../../../api"
import { successNotify } from "../../../components/notify"
import { ToastContainer } from "react-toastify"

export type FeedbackProps = {
  id: number
  name: string
  message: string
}

export default function Feedback(
  { id, name, message, setFeedbacks }: FeedbackProps &
  { setFeedbacks: (feedbacks: any) => void }
) {
  return (
    <>
      <ToastContainer />
      <Box
        component={Paper}
        display='flex'
        justifyContent={"space-between"}
        textAlign='start'
        margin={2}
        padding={1}
      >
        <div>
          <Typography variant="subtitle1" fontWeight='bold'>
            {name}
          </Typography>
          <Typography variant="subtitle1">
            {message}
          </Typography>
        </div>
        <ButtonBase
          type="button"
          onClick={() => {
            API.get(`/admin/feedbacks/${id}/delete`)
              .then(() => {
                successNotify("Successfully deleted")
                setFeedbacks((feedbacks: FeedbackProps[]) => {
                  return feedbacks.filter((feedback: FeedbackProps) => {
                    return feedback.id !== id
                  })
                })
              })
              .catch((err) => console.log("error in delete feedback: ", err))
          }}
          sx={{
            color: "red",
            width: "5rem",
            height: "2rem",
            lineHeight: "2rem",
            border: "1px solid red",
            borderRadius: 3,
          }}
        >
          Delete
        </ButtonBase>
      </Box>
    </>
  )
}