import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Learn from './component/Learn';
import Translate from './component/Translate';
import Footer from './component/Footer';
import './App.css';
import Board from './component/Board';
import Alphabet from './component/Alphabet';
import Numbers from './component/Numbers';
import CommonPhrases from './component/CommonPhrases';
import Convert from './component/Convert';
import Dictionary from './component/Dictionary';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/translate" element={<Translate />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/board" element={<Board/>} />
            <Route path="/alphabet" element={<Alphabet/>} />
            <Route path="/numbers" element={<Numbers/>} />
            <Route path="/commonphrases" element={<CommonPhrases/>} />
            <Route path="/convert" element={<Convert/>} />
            <Route path="/dictionary" element={<Dictionary/>} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;