import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import Home from '../home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';

function Parent() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default Parent;
