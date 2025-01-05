import {
  Box,
  Card,
  CardContent,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";

export default function ProjectsPage() {
  return (
    <Container maxWidth={"sm"} sx={{ px: { xs: "32px", md: "16px" } }}>
      <Box
        sx={{
          height: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grid container rowSpacing={3} columnSpacing={3}>
          {PROJECTS.map((project, index) => (
            <Grid key={index} size={{ xs: 12, md: 6 }}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card sx={{ background: "transparent" }}>
      {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
      <CardContent sx={{ p: 0 }}>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {project.description}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

interface Project {
  name: string;
  description: string;
}

const PROJECTS = [
  {
    name: "Videolearning VŠEM Watchmarker",
    description:
      "Rozšíření do prohlížeče označuje dokončené lekce a automaticky obnovuje přehrávání od posledního zhlédnutého místa",
  },
  {
    name: "Hahmlet.cz",
    description: "Generátor seznamu literatury k maturitě",
  },
];
