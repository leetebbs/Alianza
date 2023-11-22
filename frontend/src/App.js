import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar, Footer} from './components';
import Home from './pages/Home/Home';
import './App.css';
import './index.css';

const App = () => {
  return (
    <div className='App'>
        <header className='gradient__bg'>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
           {/* <Route path="/how-it-works" element={<HowItWork />} /> */}
        
        </Routes>
        <Footer />
      </div>
    
  );
};

export default App;
