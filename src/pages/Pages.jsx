import React from "react";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Recipe from "./Recipe";
import Results from "./Results";
import Navbar from "../components/Navbar";
import NotFound from "./NotFound";

function Pages() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/search/:search" element={<Results />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Pages;
