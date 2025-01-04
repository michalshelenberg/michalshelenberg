import { AppBar, Container, Toolbar, Typography } from "@mui/material";

export default function CustomAppBar() {
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Container disableGutters>
        <Toolbar sx={{ p: { xs: "32px", md: "16px" } }}>
          <Typography
            // variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textTransform: "uppercase",
              // typography: { xs: "body2", md: "body1" },
            }}
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
