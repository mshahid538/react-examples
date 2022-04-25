import React from "react";
import { getAllMovies } from "../../Services/MoviesService";
import MovieCard from "../MovieCard";
import Grid from "@mui/material/Grid";
import './Home.scss'

function Home() {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    const getMovies = async () => {
      const moviesList = await getAllMovies();
      setMovies(moviesList?.results);
    };

    !movies.length > 0 && getMovies();
  }, [movies]);

  return (
    <Grid container rowSpacing={1} className="MarginTop" >
      {movies.map((movie, ind) => {
        return <MovieCard movie={movie} />;
      })}
    </Grid>
  );
}

export default Home;
