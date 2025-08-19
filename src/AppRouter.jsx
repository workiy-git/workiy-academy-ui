import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import Internship from './pages/Internship';
import Course from './pages/Course';
import NavbarMobile from './components/NavbarMobile';

const AppRouter = () => (
  <Router>
    <Navbar />
    <NavbarMobile />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </div>
  </Router>
);

export default AppRouter;
