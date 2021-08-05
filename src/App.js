import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Results from './components/Results';
import SignUp from './components/Login/LoginCreate';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Results />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
