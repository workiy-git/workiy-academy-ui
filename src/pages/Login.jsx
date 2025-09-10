import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TextField, Button, Paper, Typography } from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/admin";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy credentials (replace with API later)
    if (username === "admin" && password === "1234") {
      localStorage.setItem("isAdminAuthenticated", "true");
      navigate(from, { replace: true });
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: "30px",
          width: "380px",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" style={{ fontWeight: "bold", marginBottom: "20px" }}>
          Admin Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: "20px" }}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: "20px" }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={{
              backgroundColor: "#1976d2",
              color: "#fff",
              padding: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "8px",
              textTransform: "none",
            }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
