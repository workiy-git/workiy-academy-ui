import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AdminNavbarMUI from './components/AdminHeader';
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
import DataGrid from './components/DataGrid';

const AppContent = () => {
  const location = useLocation();

  // ✅ Show Admin Header for admin + data grid routes
  const adminPaths = [
    "/admin",
    "/enquiry-records",
    "/internship-records"
  ];
  const isAdminRoute = adminPaths.some(path => location.pathname.startsWith(path));

  return (
    <>
      {/* ✅ Show Admin Navbar on Admin + DataGrid pages */}
      {isAdminRoute ? <AdminNavbarMUI /> : <Navbar />}

      <div className="container">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseSlug" element={<Course />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/course" element={<Course />} />
          <Route path="/login" element={<Login />} />

          {/* Data Grid Pages (Show Admin Header) */}
          <Route path="/enquiry-records" element={<DataGrid />} />
          <Route path="/internship-records" element={<DataGrid />} />

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
    </>
  );
};

const AppRouter = () => (
  <Router>
    <AppContent />
  </Router>
);

export default AppRouter;
