import { Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getConfigureMovieAPI } from "../../Services/MoviesService";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Slider from '@mui/material/Slider';
import "./MovieCard.scss";
import { useDispatch, useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "25px",
  boxShadow: 24,
  p: 4,
};

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const baseURL=useSelector((state) => state.ImagePath.value);  

  const PosterPic = `${baseURL}/original/${movie.poster_path}`;
  

  return (
    <>
      <Grid
        container
        item
        xs={4}
        className="container"
        justifyContent="center"
        alignItems="center"
      >
        <Paper elevation={3}>
          <Card className="card">
            <CardMedia
              component="img"
              alt="green iguana"
              className="imageSize"
              image={PosterPic}
              onClick={() => navigate(`/movie-detail/id=${movie.id}`)}
            />
            <CardContent
              onClick={() => navigate(`/movie-detail/id=${movie.id}`)}
            >
              <Typography gutterBottom variant="h5" component="div">
                {movie.title}
              </Typography>{" "}
            </CardContent>
            <CardActions>
              <Button size="small" onClick={handleOpen}>
                {movie.vote_average}
              </Button>
              <Button size="small">{movie.vote_count}</Button>
            </CardActions>
          </Card>
        </Paper>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Rating for {movie.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Current Rating: {movie.vote_average} Total Vote Count:{" "}
            {movie.vote_count}
          </Typography>

          <Box width={300}>
            <Slider
              defaultValue={0}
              aria-label="Default"
              valueLabelDisplay="auto"
              min={0}
              max={10} 

            />
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default MovieCard;
