import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DevOps from './pages/DevOps';
import './App.css';
import Designs from './pages/Designs';
import FrontEnd from './pages/FrontEnd';
import Footer from './components/Footer';

function App() {
  // Replace with your actual name and phone number
  const myName = "FIDELIS AGBA";
  const phoneNumber = "+2348085952266";
  
  return (
    <Router>
      <div className="App">
        <Navbar name={myName} phoneNumber={phoneNumber} />
        
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/devops" element={<DevOps />} />
            <Route path="/designs" element={<Designs />} />
            <Route path="/frontend" element={<FrontEnd />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;