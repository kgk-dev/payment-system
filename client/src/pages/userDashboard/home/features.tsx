/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AttachMoney,
  Send,
  FormatAlignJustify,
  History,
  Chat,
  Notifications
} from "@mui/icons-material"
import { Stack, IconButton } from "@mui/material"
import { Link } from "react-router-dom"

const Features = () => {
  return (
    <Stack direction="row" spacing={5}>
      <div>
        <IconButton
          LinkComponent={Link}
          to="/users/transfer"
          style={{
            height: "4rem",
            width: "4rem",
          }}
        >
          <div>
            <AttachMoney />
            <Send />
          </div>
        </IconButton>
      </div>
      <div>
        <IconButton
          LinkComponent={Link}
          to="/users/chat"
          style={{
            height: "4rem",
            width: "4rem",
          }}
        >
          <Chat />
        </IconButton>
      </div>
      <div>
        <IconButton
          LinkComponent={Link}
          to="/users/transfer"
          style={{
            height: "4rem",
            width: "4rem",
          }}
        >
          <div>
            <FormatAlignJustify />
            <History />
          </div>
        </IconButton>
      </div>
      <div>
        <IconButton
          LinkComponent={Link}
          to="/users/transfer"
          style={{
            height: "4rem",
            width: "4rem",
          }}
        >
          <Notifications />
        </IconButton>
      </div>
    </Stack>
  )
}

export default Features