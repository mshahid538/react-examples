import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import "./App.scss";

function App() {
  return (
    <Container maxWidth="xl">
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Router>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              {/* Catch all */}
              <Route path="*" element={<Home />}></Route>
            </Routes>
          </Router>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}

export default App;
