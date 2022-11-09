import { Container, Box, Typography } from "@mui/material";

function Footer() {
  const logo = require("../images/logo.png");

  return (
    <Container
      className="footer"
      sx={{
        display: { xs: "block" },
      }}
    >
      <Box
        sx={{
          display: { xs: "flex" },
          width: "100%",
        }}
        className="footer-box"
      >
        <Box sx={{ display: { sm: "block" } }}>
          <img src={logo} alt="BestMovies Logo" className="logo" />
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "flex" },
        }}
        className="copyright-box"
      >
        <Typography variant="h6" sx={{ fontSize: "13px", fontWeight: "500" }}>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="/">BestMovies Inc., All Rights Reserved.</a>
        </Typography>
      </Box>
    </Container>
  );
}
export default Footer;
