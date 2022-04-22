import { Grid } from "@mui/material";
import React from "react";

function MovieCard({ movie }) {

    return(
        <Grid container item xs={4} 
            classes={'MuiGrid-item'}
            justifyContent="center"
            alignItems="center"
        >
            <h3>{movie.title}</h3>
        </Grid>
    )
}

export default MovieCard;
