import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// PAGES
import Home from "./pages/Home/Home";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import PublicWork from "./pages/PublicWork/PublicWork";
// STYLES
import "./App.css";
import "./index.css";
import Transparency from "./pages/Transparency/Transparency";


const App = () => {
  return (
    <div className="App">
      <header className="gradient__bg">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/public-works" element={<PublicWork />} />
        <Route path="/transparency" element={<Transparency />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
