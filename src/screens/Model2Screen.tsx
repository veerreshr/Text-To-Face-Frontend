import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import React,{useEffect} from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import rocketGIF from "../assets/rocket.gif";
import alanBtn from "@alan-ai/alan-sdk-web";


const Model2Screen = () => {
  const [text, setText] = React.useState("");
  const [numOfImages, setNumOfImages] = React.useState(2);
  const [loading, setLoading] = React.useState(false);
  const [images, setImages] = React.useState([]);
  const marks = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 5,
      label: "5",
    },
    {
      value: 6,
      label: "6",
    },
    {
      value: 7,
      label: "7",
    },
    {
      value: 8,
      label: "8",
    },
    {
      value: 9,
      label: "9",
    },
    {
      value: 10,
      label: "10",
    },
  ];

  const generateImages = async () => {
    setImages([]);
    setLoading(true);
    let url = import meta.env.VITE_VQGAN_CLIP_BACKEND_URL;
    let images;
    try {
      await fetch(url+"/vqganclip", {
        method: "POST",
        body: JSON.stringify({ text, num_images: numOfImages }),
        headers: { "Content-Type": "application/json" },
      }).then((res) => res.json());
      images = await fetch(
        url+"/getoutput",
        {
          method: "POST",
          body: JSON.stringify({ text, num_images: numOfImages }),
          headers: { "Content-Type": "application/json" },
        }
      ).then((res) => {
        return res.json();
      });
      setImages(images);
      setLoading(false);
    } catch (error) {}

    // setTimeout(async () => {

    // }, 1000 * 60);

    console.log(images);
  };

  useEffect(() => {
    alanBtn({
      key: '3e4079c2d9faa46d106dfb367d1e36522e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData:any) => {
        if (commandData.command === 'generate_faces') {
          console.log("Generating Images");
          let {description,num_of_images}=commandData;
          setText(description);
          setNumOfImages(+num_of_images);
          generateImages();
        }
        if (commandData.command === 'test') {
          console.log("test");
        }
      }
    });
  
  },[])

  return (
    <Grid container spacing={2} sx={{ mt: 8 }}>
      <Grid item sm={12} md={6}>
        <Card sx={{ width: "100%", p: 2 }}>
          <CardContent>
            <Typography variant="h4" component="div">
              Model : VQGAN + CLIP
            </Typography>
            <TextField
              sx={{ mt: 3 }}
              label="Describe Face with Textual Descriptions"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Typography gutterBottom sx={{ mt: 3 }}>
              Number of Images to generate: {numOfImages}
            </Typography>
            <Slider
              sx={{ mt: 2 }}
              aria-label="Always visible"
              defaultValue={2}
              getAriaValueText={(val) =>
                `Number of Images to generate : ${val}`
              }
              step={1}
              min={1}
              max={10}
              marks={marks}
              onChange={(event) => {
                setNumOfImages(
                  (event.target as HTMLInputElement).value as unknown as number
                );
              }}
            />
          </CardContent>
          <CardActions sx={{ my: 1 }}>
            <Button
              size="small"
              variant="contained"
              fullWidth
              onClick={generateImages}
            >
              Generate Images
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={12} md={6}>
        <Card sx={{ width: "100%", p: 2 }}>
          <CardContent>
            <Typography variant="h4" component="div">
              Generated Images
            </Typography>
            {(!images || images.length === 0) && <PlaceholderForImageList />}
            {loading ? (
              <Backdrop open={true}>
                <CircularProgress sx={{ color: "#fff" }} />
              </Backdrop>
            ) : (
              images?.length > 0 && <DisplayImages itemData={images} />
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

function DisplayImages({ itemData }: { itemData: Array<String> }) {
  return (
    <ImageList cols={3}>
      {itemData.map((item: String, ind: number) => (
        <ImageListItem key={item as React.Key}>
          <img
            src={`data:image/png;base64,${item}`}
            srcSet={`data:image/png;base64,${item}`}
            alt={`Generated Image ${ind}`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

function PlaceholderForImageList() {
  return (
    <Box
      sx={{
        height: "500px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={rocketGIF} width="50%" />
      <Typography variant="h6" component="div">
        No Images Generated
      </Typography>
    </Box>
  );
}

export default Model2Screen;

//`data:image/png;base64,${this.state.image}`
