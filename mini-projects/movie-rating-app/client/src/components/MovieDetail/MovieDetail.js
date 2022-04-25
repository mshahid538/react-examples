import React from "react";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./MovieDetail.scss";

function MovieDetail() {
  let { id } = useParams();
  const movie = useSelector((state) =>
    state.Movies.value.find((x) => x.id === parseInt(id.split("=")[1]))
  );

  const baseURL = useSelector((state) => state.ImagePath.value);

  const PosterPic = `${baseURL}/original/${movie?.poster_path}`;
  
  return (
    <div
      className="movieDetail"
      style={{ backgroundImage: `url(${PosterPic})` }}
    >
      <Typography variant="h2" align="center">
        {movie.title}
      </Typography>

      <Typography variant="h4" align="center">
        {movie.overview}
      </Typography>
    </div>
  );
}

export default MovieDetail;
