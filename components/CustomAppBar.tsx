import { AppBar, Container, Toolbar, Typography } from "@mui/material";

export default function CustomAppBar() {
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Container disableGutters>
        <Toolbar>
          <Typography
            // variant="h6"
            component="div"
            sx={{ flexGrow: 1, textTransform: "uppercase" }}
          >
            Michal Sheleneberg
          </Typography>
          {/* <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">Blog</Button>
            <Button color="inherit">Contact</Button>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
