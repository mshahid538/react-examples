import React from "react";
import { getAllMovies } from "../../Services/MoviesService";
import MovieCard from "../MovieCard";
import Grid from "@mui/material/Grid";

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
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {movies.map((movie, ind) => {
        return <MovieCard movie={movie} />;
      })}
    </Grid>
  );
}

export default Home;
