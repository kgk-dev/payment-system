import { Box, Typography } from "@mui/material"
import { AdminInfoContextType, useAdmin } from "../provider/adminInfoProvider"
import { Person } from "@mui/icons-material"

export default function Profile() {
  const { info } = useAdmin() as AdminInfoContextType

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <div style={{
        marginTop: 50,
        height: "5rem",
        width: "5rem",
      }}
      >
        <Person sx={{
          color: "primary.main",
          scale: "5"
        }} />
      </div>
      <Box>
        <Typography
          variant='h6'
          fontWeight="bold"
          fontSize={20}
        >
          Admin ID: {info.id}
        </Typography>
      </Box>
    </Box>
  )
}
