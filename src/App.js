import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Project from './pages/Projects'

function App() {
  return (
    <Router>
      <Header/>
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
        <Footer/>
    </Router>
  );
}

export default App;