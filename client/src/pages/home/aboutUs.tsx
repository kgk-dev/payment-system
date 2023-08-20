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
              color: "blue",
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
          > Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus qui facilis eligendi tempore commodi dolores laborum dolor aliquam doloremque, sed atque alias, architecto eaque aspernatur modi sequi exercitationem culpa.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, neque doloremque. Sit modi eaque natus sint eius repellendus excepturi minus rerum rem praesentium, saepe consequuntur amet! Minus culpa modi quae.
          </Typography>
        </Box>
      </Container>
    </Grid>
  )
}
