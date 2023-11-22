import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar, Footer} from './components';
import Home from './pages/Home/Home';
 
import './App.css';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <header className='gradient__bg'>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
        
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
