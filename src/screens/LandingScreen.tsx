import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import ArticleIcon from "@mui/icons-material/Article";
import TwitterIcon from "@mui/icons-material/Twitter";
import heroSectionCoverImage from "../assets/hero-section-cover.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ellipseImage from "../assets/ellipse.svg";
import repeatedCirclesImage from "../assets/repeated-circles.svg";

const LandingScreen = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        color: "secondary.main",
      }}
    >
      <img
        src={ellipseImage}
        style={{ position: "absolute", left: "00%" }}
        width="120%"
        height="120%"
      />
      <Grid container spacing={2} sx={{ height: "90vh" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <img
            src={heroSectionCoverImage}
            style={{
              position: "absolute",
              right: "-20%",
              transform: "translateY(5%)",
              zIndex: "-1",
            }}
            width="80%"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position:"relative"
          }}
        >
          <img
            src={repeatedCirclesImage}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-10%,-40%)",
              zIndex: "-1",
            }}
            width="60%"
          />
          <Typography variant="h2" component="a">
            Get, Set, Create a Face from Text
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item sm={12} md={3}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <ArrowDownwardIcon sx={{ fontSize: "3em" }} />
            <Typography variant="overline" display="block" gutterBottom>
              scroll for more
            </Typography>
          </Stack>
        </Grid>
        <Grid item sm={12} md={9}>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={8}
          >
            <GitHubIcon />
            <CodeIcon />
            <ArticleIcon />
            <TwitterIcon />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingScreen;
