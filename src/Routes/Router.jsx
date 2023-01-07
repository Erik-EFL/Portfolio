import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Home from '../pages/Home/Home';
import Projects from '../pages/Projects/Projects';
import Skills from '../pages/Skills/Skills';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import NavMobile from '../components/MobileMenu/FooterMobile';
import Main from '../components/Styles/Main.styled';
import About from '../pages/About/About';

export default function Router() {
  return (
    <>
      <Main>
        <BrowserRouter>
          <CssBaseline />
          <Header />
          <Routes>
            <Route exact path='/projects' element={<Projects />} />
            <Route exact path='/skills' element={<Skills />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/' element={<Home />} />
          </Routes>
          <NavMobile />
        </BrowserRouter>
        <Footer />
      </Main>
    </>
  );
}
