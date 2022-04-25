import React from "react";
import Typography from "@mui/material/Typography";

import "./MovieDetail.scss";
import {  useSelector } from "react-redux";   
import {useParams} from 'react-router-dom';

function MovieDetail() {
  let { id } = useParams(); 
 
  const movie = useSelector((state) =>
    state.Movies.value.find((x) => x.id ===  parseInt(id.split('=')[1]))
  );
 
  return (
    <div className="movieDetail">
      <Typography variant="h3" align="center">
        {movie.title}
      </Typography>
      <Typography variant="h3" align="center" paragraph="true">
        ksajdksadksha
        asdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddd
      </Typography>
    </div>
  );
}

export default MovieDetail;
