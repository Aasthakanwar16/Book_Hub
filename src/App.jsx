import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import BCA1Download from './Components/BCA1Download/Bca1'; // Ensure this path matches the actual folder and file names
import BCA2Download from './Components/BCA2Download/Bca2';
import BCA3Download from './Components/BCA3Download/Bca3';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bca-1-download" element={<BCA1Download />} />
        <Route path="/bca-2-download" element={<BCA2Download />} />
      <Route path="/bca-3-download" element={<BCA3Download />} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
