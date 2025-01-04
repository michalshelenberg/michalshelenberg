import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Container maxWidth={"sm"}>
      <Box
        component={"header"}
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ typography: { xs: "h4", md: "h3" }, mb: 4 }}>
          Web developer, <br />
          specializing in Next.js <br />
          applications
        </Typography>
        <Typography sx={{ mb: 4 }}>
          From an early age, my fascination with programming and computers
          ignited a lifelong passion. Constantly learning and developing, I
          strive to make an impact through innovative solutions.
        </Typography>
        <Stack direction={"row"} gap={1}>
          <Link
            href={"https://www.linkedin.com/in/michalshelenberg/"}
            target="_blank"
          >
            <Button variant="contained">Hire me</Button>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/michalshelenberg/"}
            target="_blank"
          >
            <Button variant="outlined">LinkedIn</Button>
          </Link>
        </Stack>
      </Box>
      {/* <Box
        component={"section"}
        sx={{
          // height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // p: 3,
        }}
      >
        <Typography variant="h6" sx={{ textTransform: "uppercase", mb: 4 }}>
          Favourite technologies
        </Typography>
        <Stack></Stack>
      </Box> */}
    </Container>
  );
}
