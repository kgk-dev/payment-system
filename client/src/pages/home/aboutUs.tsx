import { Grid, Container, Box, Typography } from "@mui/material";

export default function AboutUs() {
  return (
    <Grid item marginTop={13}>
      <Container maxWidth="lg">
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={4}
        >
          <Typography
            variant="h3"
            component={"h2"}
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "primary.main",
            }}>
            About Us
          </Typography>
          <Typography
            variant="h6"
            component={"p"}
            fontSize={24}
            sx={{
              textAlign: "justify",
            }}
          >
            Welcome to Payment System founded in 2023. Our mission is simple: to simplify the complexities of financial transactions, making it easier for our clients to focus on what you do best.
          </Typography>
        </Box>
      </Container>
    </Grid>
  )
}
