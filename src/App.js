import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";
// import components
import Navbar from "./components/Navbar";
// context

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="cocktail/:id" element={<SingleCocktail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
