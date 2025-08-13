import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";

const categories = [
  "All",
  "AI & Machine Learning",
  "Programming",
  "Design",
  "Business",
   "Mobile Development",
  "Data Science",
  "Other"
];

const CourseSearchBar = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search logic here
  };

  return (
    <Paper elevation={0} sx={{ width: '100vw', maxWidth: '100vw', mx: 0, my: 6, p: { xs: 2, md: 4 }, borderRadius: 0, textAlign: "center", bgcolor: "#fff", boxShadow: 'none' }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: "#262627" }}>
        Search among <span style={{ color: '#5A69F2' }}>307</span> courses and find your favorite course
      </Typography>
      <Box component="form" onSubmit={handleSearch} sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2, alignItems: "center", justifyContent: "center", mt: 3 }}>
        <TextField
          select
          label="Categories"
          value={category}
          onChange={e => setCategory(e.target.value)}
          sx={{ minWidth: 160, bgcolor: "#f9f9fb" }}
        >
          {categories.map((cat, idx) => (
            <MenuItem key={idx} value={cat}>{cat}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Search anything"
          value={search}
          onChange={e => setSearch(e.target.value)}
          sx={{ flex: 1, maxWidth: 900, bgcolor: "#f9f9fb" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            )
          }}
        />
        <Button type="submit" variant="contained" sx={{ fontWeight: 600, px: 4, height: 56, backgroundColor: "#262627" ,color:"#fff" }}>
          Search
        </Button>
      </Box>
      <Typography variant="body2" sx={{ mt: 3, color: "#888" }}>
        Or view the following courses...
      </Typography>
    </Paper>
  );
};

export default CourseSearchBar;
