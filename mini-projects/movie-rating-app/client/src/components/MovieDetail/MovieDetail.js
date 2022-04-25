import React from "react";
import Typography from "@mui/material/Typography";

import "./MovieDetail.scss";

function MovieDetail({ movie }) {
  console.log("asdadx", movie);
  return (
    <div className="movieDetail">
      <Typography variant="h3" align="center">
        ksajdksadksha
      </Typography>
      <Typography variant="h3" align="center" paragraph='true'>
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
