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

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const [config, setConfig] = React.useState(null);

  React.useEffect(() => {
    const getConfigurations = async () => {
      const myConfig = await getConfigureMovieAPI();
      console.log("aaaaaaaaaaaa", myConfig);
      setConfig(myConfig);
    };

    !config && getConfigurations();
  });

  const PosterPic = `${config?.data?.images?.base_url}${movie.poster_path}`;

  return (
    <Grid
      container
      item
      xs={4}
      classes={"MuiGrid-item"}
      justifyContent="center"
      alignItems="center"
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={PosterPic}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" onClick={ ()=> navigate(`/movie-detail/id=${movie.id}`)}>
            {movie.overview}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{movie.vote_average}</Button>
          <Button size="small">{movie.vote_count}</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default MovieCard;
