import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    style: {
      backgroundColor: trigger ? "#141414" : "transparent",
    },
    elevation: trigger ? 4 : 0,
  });
}

const NavBar = () => {
  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar>
          <Typography
            variant="h6"
            component="a"
            sx={{ textDecoration: "none", color: "inherit" }}
            noWrap
            href="/"
          >
            TEXT-TO-FACE
          </Typography>
          <Box sx={{width:{sm:0,md:"30vw"}}} />
          <Box sx={{ flexGrow: 1, display:"flex", justifyContent:"space-between" }}>
            <Button
              variant="text"
              onClick={() => {}}
              sx={{ my: 2, color: "inherit", display: "block" }}
              href="/model1"
            >
              MODEL 1
            </Button>
            <Button
              variant="text"
              onClick={() => {}}
              sx={{ my: 2, color: "inherit", display: "block" }}
              href="/model2"
            >
              MODEL 2
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {}}
              sx={{ my: 2, display: "block" }}
              href="https://drive.google.com/drive/u/3/folders/1Ama7ANqWtAzobRlq-25Q570ex4jSd8h5" //TODO: add link to drive folder and make it public, this is temporary link
              target="_blank"
            >
              OPEN IN COLAB
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default NavBar;
