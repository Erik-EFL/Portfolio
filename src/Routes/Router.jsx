import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Home from '../pages/Home/Home';
import Projects from '../pages/Projects/Projects';
import Skills from '../pages/Skills/Skills';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <CssBaseline />
        <Header />
        <Routes>
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/skills' element={<Skills />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
