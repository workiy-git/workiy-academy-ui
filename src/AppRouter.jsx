import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Header';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import Internship from './pages/Internship';
import Course from './pages/Course';
import Admin from './pages/Admin';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';

const AppRouter = () => (
  <Router>
    <Navbar />
   
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
         <Route path="/courses/:courseSlug" element={<Course />} /> {/* <-- DYNAMIC ROUTE */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/course" element={<Course />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
         {/* 🔒 Protecting Admin Route */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  </Router>
);

export default AppRouter;
