import React from "react";
import Typography from "@mui/material/Typography";
import { getTopRatedMovies } from "../../Services/MoviesService";
import "./Stats.scss";
import { useRef } from "react";
import DrawChart from "./DrawChart";

function Stats() {
  const topMoviesChart = useRef();
  const voteCountChart = useRef();

  const [data, setData] = React.useState([]);
  const [data2, setData2] = React.useState([]); 

  React.useEffect(() => {
    const getTopMovies = async () => {
      let res = await getTopRatedMovies();
      setData(
        res?.results.slice(9).map((x) => {
          return { category: x.id, quantity: x.vote_average };
        })
      );

      setData2(
        res?.results.slice(9).map((x) => {
          return { category: x.id, quantity: x.vote_count };
        })
      );
    };

    getTopMovies();
  }, []);
 
 
  DrawChart(data, topMoviesChart,'Movies IDs on X-Axis', 'Average Vote Count on Y-Axis');
  DrawChart(data2, voteCountChart,'Movies IDs on X-Axis', 'Total Votes on Y-Axis');

  return (
    <div className="Status">
      <Typography variant="h5" align="center">
        Top Rated 10 Movies
      </Typography> 
      <svg ref={topMoviesChart}></svg> 

      <Typography variant="h5" align="center">
        Showing Vote Count
      </Typography>
      <svg ref={voteCountChart}></svg> 
    </div>
  );
}

export default Stats;
