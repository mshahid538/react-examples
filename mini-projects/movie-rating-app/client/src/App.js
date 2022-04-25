import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Stats from "./components/Stats";
import Navbar from "./components/Navbar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./App.scss";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <Container maxWidth="xl">
      <Grid item xs={12}>
        <Router>
          <Grid item xs={12}>
            <Navbar />
          </Grid>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/movie-detail/:id" element={<MovieDetail />} />
            {/* Catch all */}
            <Route path="*" element={<Home />}></Route>
          </Routes>
        </Router>
      </Grid>
    </Container>
  );
}

export default App;
