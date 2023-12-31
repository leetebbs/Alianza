import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// PAGES
import Home from "./pages/Home/Home";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import PublicWork from "./pages/PublicWork/PublicWork";
import ProjectDetailPage from "./pages/ProjectDetailPage/ProjectDetailPage"
// STYLES
import "./App.css";
import "./index.css";
import Transparency from "./pages/Transparency/Transparency";
import Incentives from "./pages/Incentives/Incentives";
import Test from "./pages/Test/Test";
import Admin from "./pages/Admin/Admin";
import ProposalForm from "./containers/ProposalForm/ProposalForm";
import VoteProject from "./pages/VotePoject/VotePoject";

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
        <Route path="/public-works/:projectId" element={<ProjectDetailPage />} />
        <Route path="/public-works/project-to-vote" element={<VoteProject/>} />
        <Route path="/transparency" element={<Transparency />} />
        <Route path="/incentives" element={<Incentives />} />
        <Route path="/test" element={<Test />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/proposalform" element={<ProposalForm />} />
      </Routes>
      <Footer /> 
    </div>
  );
};

export default App;
