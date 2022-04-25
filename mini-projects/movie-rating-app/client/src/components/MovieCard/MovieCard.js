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

import "./MovieCard.scss";
import { useDispatch, useSelector } from "react-redux";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const baseURL=useSelector((state) => state.ImagePath.value);  

  const PosterPic = `${baseURL}/original/${movie.poster_path}`;
  

  return (
    <Grid
      container
      item
      xs={4}
      className='container'
      justifyContent="center"
      alignItems="center"
    >
      <Paper elevation={3} onClick={ ()=> navigate(`/movie-detail/id=${movie.id}`)}>
        <Card className="card">
          <CardMedia
            component="img"
            alt="green iguana"
            className="imageSize"
            image={PosterPic}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.title}
            </Typography>{" "}
          </CardContent>
          <CardActions>
            <Button size="small">{movie.vote_average}</Button>
            <Button size="small">{movie.vote_count}</Button>
          </CardActions>
        </Card>
      </Paper>
      
    </Grid>
  );
}

export default MovieCard;
