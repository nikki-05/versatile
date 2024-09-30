import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Learn from './component/Learn';
import Translate from './component/Translate';
import Footer from './component/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Translate />} />
            <Route path="/home" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;