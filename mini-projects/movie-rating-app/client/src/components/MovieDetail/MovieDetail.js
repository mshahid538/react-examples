import React from "react";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Slider from "@mui/material/Slider";
import Snackbar from "@mui/material/Snackbar";
import { saveNewRating } from "../../Services/MoviesService";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import { getMovieInfo } from "../../Services/MoviesService";
import "./MovieDetail.scss";

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

function MovieDetail() {
  let { id } = useParams();

  const [open, setOpen] = React.useState(false);
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [rating, setRating] = React.useState(0);
  const [movie, setMovie] = React.useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    const getInfo = async () => {
      const res = await getMovieInfo(parseInt(id.split("=")[1]));
      console.log("mmmmmmmmmmmmm", res);
      setMovie(res);
    };
    getInfo();
  }, [setMovie, id]);

  const baseURL = useSelector((state) => state.ImagePath.value);

  const PosterPic = `${baseURL}/original/${movie?.poster_path}`;

  const handleSubmit = async () => {
    const res = await saveNewRating(movie.id, rating);
    setSnackOpen(true);
    handleClose();
  };

  return (
    <>
      <div className="movieDetail">
        <Typography variant="h2" align="center">
          {movie?.title}
          <br />
          <Button size="small" variant="contained" onClick={handleOpen}>
            Rate This Movie
          </Button>
        </Typography>
        <br />
        <Stack spacing={1} alignItems="center">
          <Stack direction="row" spacing={2}>
            <Tooltip title="Rating">
              <Chip
                label={movie?.vote_average}
                color="primary"
                variant="outlined"
              />
            </Tooltip>
            <Tooltip title="Vote Count">
              <Chip
                label={movie?.vote_count}
                color="success"
                variant="outlined"
              />
            </Tooltip>
          </Stack>
        </Stack>
        <br />
        <Stack direction="row" spacing={2}>
          {movie?.genres.map((x) => {
            return <Chip label={x?.name} color="primary" variant="outlined" />;
          })}
        </Stack>
        <br />
        <Typography variant="body" align="center">
          Tagline: {movie?.tagline}
        </Typography>
        <img src={PosterPic} alt={movie?.title} height="300" width="500" />

        <Typography variant="body" align="center">
          Release Date: {movie?.release_date}
        </Typography>

        <ul>
          <li>Language: {movie?.spoken_languages.map((x) => x.name)}</li>
          <li>Popularity: {movie?.popularity}</li>
          <li>Revenue: {movie?.revenue}</li>
          <li>Budget: {movie?.budget}</li>
          <li>Runtime: {movie?.runtime}</li>
          <li>Collection: {movie?.belongs_to_collection?.name}</li>
        </ul>

        <Typography variant="h4" align="left">
          {" "}
          Description
        </Typography>
        <Typography variant="body1" align="center" style={{ width: "70%" }}>
          {movie?.overview}
        </Typography> 
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Rating for {movie?.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Current Rating: {movie?.vote_average} Total Vote Count:{" "}
            {movie?.vote_count}
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
        severity="success"
      />
    </>
  );
}

export default MovieDetail;
