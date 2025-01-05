import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function CustomAppBar() {
  return (
    <AppBar
      position="fixed"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth={"sm"} disableGutters>
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
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Link href={"/projects"}>
              <Button color="inherit">Projects</Button>
            </Link>
            {/* <Button color="inherit">Blog</Button> */}
            {/* <Button color="inherit">Contact</Button> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
