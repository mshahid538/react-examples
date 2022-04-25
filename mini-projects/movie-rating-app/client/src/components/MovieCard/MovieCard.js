import { Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Slider from "@mui/material/Slider";
import { useSelector } from "react-redux";
import { saveNewRating } from "../../Services/MoviesService";
import Snackbar from "@mui/material/Snackbar";
import "./MovieCard.scss";

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
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [rating, setRating] = React.useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const baseURL = useSelector((state) => state.ImagePath.value);

  const PosterPic = `${baseURL}/original/${movie.poster_path}`;

  const handleSubmit = async () => {
    const res = await saveNewRating(movie.id, rating);
    setSnackOpen(true);

    handleClose();
  };

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
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Rating for {movie.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Current Rating: {movie.vote_average} Total Vote Count:{" "}
            {movie.vote_count}
          </Typography>

          <Box width={"100%"}>
            <h3>Give New Rating</h3>
            <Slider
              defaultValue={0}
              aria-label="Default"
              valueLabelDisplay="auto"
              min={0}
              max={10}
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />

            <Button variant="contained" fullWidth onClick={handleSubmit}>
              Submit
            </Button>
            <Button
              variant="outlined"
              color="info"
              fullWidth
              style={{ marginTop: "5px" }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={() => setSnackOpen(false)}
        message="Movie Rated Successfully" 
        color='success'
      /> 
    </>
  );
}

export default MovieCard;
