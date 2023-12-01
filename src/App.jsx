import React from "react";
import { Routes, Route } from "react-router-dom";
import MoviePageLayout from "./moviePlace/MoviePageLayout";
import MovieDescription from "./moviePlace/MovieDescription";
import MovieplaceLayout from "./moviePlace/MovieplaceLayout";
import MoviePlace from "./moviePlace/MoviePlace";
import Home from "./moviePlace/Home";
import AboutUs from "./moviePlace/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MoviePageLayout />}>
        <Route index element={<Home />} />
        <Route path="/movieplace" element={<MovieplaceLayout />}>
          <Route index element={<MoviePlace />} />
          <Route path=":movieId" element={<MovieDescription />} />
        </Route>
        <Route path="/about" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;
