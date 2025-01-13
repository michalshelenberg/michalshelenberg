import {
  Box,
  Button,
  Chip,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import {
  Azure,
  CSharp,
  Figma,
  MaterialUI,
  NextJs,
  React,
  Redux,
  TypeScript,
} from "developer-icons";
import Link from "next/link";

export default function Home() {
  return (
    <Container maxWidth={"sm"} sx={{ px: { xs: "32px", md: "16px" } }}>
      <Box
        component={"header"}
        sx={{
          height: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ typography: { xs: "h5", md: "h3" }, mb: 4 }}>
          Fullstack Developer
          <br />
          TypeScript, React
          <br />
          Next.js, ASP.NET Core
        </Typography>
        <Typography sx={{ typography: { xs: "body2", md: "body1" }, mb: 4 }}>
          From an early age, my fascination with programming and computers
          ignited a lifelong passion. Constantly learning and developing, I
          strive to make an impact through innovative solutions.
        </Typography>
        <Stack direction={"row"} gap={1}>
          <Link
            href={"https://www.linkedin.com/in/michalshelenberg/"}
            target="_blank"
          >
            <Button variant="contained">LinkedIn</Button>
          </Link>
          <Link href={"https://github.com/michalshelenberg"} target="_blank">
            <Button variant="outlined">GitHub</Button>
          </Link>
        </Stack>
      </Box>

      {/* Technologies & Skills */}
      <Box
        component={"section"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Stack gap={8}>
          <Box>
            <Typography
              variant="body1"
              sx={{ textTransform: "uppercase", mb: 4 }}
            >
              Technologies
            </Typography>
            <Grid2 container spacing={1}>
              <Grid2 size={{ xs: 3, md: 1.5 }}>
                <TypeScript size={44} />
              </Grid2>
              <Grid2 size={{ xs: 3, md: 1.5 }}>
                <React size={44} />
              </Grid2>
              <Grid2 size={{ xs: 3, md: 1.5 }}>
                <NextJs size={44} />
              </Grid2>
              <Grid2 size={{ xs: 3, md: 1.5 }}>
                <Redux size={44} />
              </Grid2>
              <Grid2 size={{ xs: 3, md: 1.5 }}>
                <MaterialUI size={44} />
              </Grid2>
              <Grid2 size={{ xs: 3, md: 1.5 }}>
                <CSharp size={44} />
              </Grid2>
              <Grid2 size={{ xs: 3, md: 1.5 }}>
                <Azure size={44} />
              </Grid2>
              <Grid2 size={{ xs: 3, md: 1.5 }}>
                <Figma size={44} />
              </Grid2>
            </Grid2>
          </Box>

          <Box>
            <Typography
              variant="body1"
              sx={{ textTransform: "uppercase", mb: 4 }}
            >
              Skills
            </Typography>
            <Stack
              direction={"row"}
              gap={1}
              useFlexGap
              sx={{ flexWrap: "wrap" }}
            >
              <Chip variant="outlined" label="TypeScript" />
              <Chip variant="outlined" label="React" />
              <Chip variant="outlined" label="Next.js" />
              <Chip variant="outlined" label="Redux" />
              <Chip variant="outlined" label="Redux Toolkit" />
              <Chip variant="outlined" label="Material UI" />
              <Chip variant="outlined" label="react-hook-form" />
              <Chip variant="outlined" label="Zod" />
              <Chip variant="outlined" label="Cypress" />
              <Chip variant="outlined" label="C#" />
              <Chip variant="outlined" label="ASP.NET Core" />
              <Chip variant="outlined" label="Microsoft Azure" />
              <Chip variant="outlined" label="Figma" />
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* Featured projects */}
      <Box
        component={"header"}
        sx={{
          height: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      ></Box>
    </Container>
  );
}
