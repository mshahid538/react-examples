import React from "react";
import { getAllMovies } from "../../Services/MoviesService";
import MovieCard from "../MovieCard";
import Grid from "@mui/material/Grid";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { saveMoviesList } from "../../features/MoviesSlice";

function Home() {
  const dispatch = useDispatch();

  const moviesList = useSelector((state) => state.Movies.value);

  React.useEffect(() => {
    const getMovies = async () => {
      const movies = await getAllMovies();
      dispatch(saveMoviesList(movies?.results));
    };

    !moviesList.length > 0 && getMovies();
  }, [moviesList, dispatch]);

  return (
    <Grid container rowSpacing={1} className="MarginTop">
      {moviesList?.map((movie) => {
        return <MovieCard movie={movie} />;
      })}
    </Grid>
  );
}

export default Home;
