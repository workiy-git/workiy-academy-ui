import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">Workiy Academy</div>
    <ul   {features.map((f, i) => (
            <Grid item xs={4} sm={4} md={4} key={i} display="flex">
              <div></div>
                <Box sx={{ mb: 2 }}>{f.icon}</Box>
                <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {f.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {f.desc}
                  </Typography>
                </CardContent>
              </Card>
  </nav>
);

export default Navbar;
