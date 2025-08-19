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
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "Computer Vision",
  "Business & Strategy",
  "Ethics & Responsible AI",
  "Programming",
  "Design",
  "Data Science",
  "Mobile Development",
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

    <Paper
      elevation={0}
      sx={{
        mx: 0,
        my: { xs: 2, md: 6 },
        p: { xs: 1.5, sm: 2, md: 4 },
        borderRadius: 0,
        textAlign: "center",
        bgcolor: "#fff",
        boxShadow: 'none',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          mb: { xs: 1, md: 1 },
          color: "#262627",
          fontSize: { xs: 18, sm: 20, md: 24 },
        }}
      >
        Search among <span style={{ color: '#5A69F2' }}>307</span> courses and find your favorite course
      </Typography>
      <Box
        component="form"
        onSubmit={handleSearch}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: { xs: 1.5, sm: 2 },
          alignItems: { xs: "stretch", md: "center" },
          justifyContent: "center",
          mt: { xs: 2, md: 3 },
          width: '100%',
        }}
      >
        <TextField
          select
          label="Categories"
          value={category}
          onChange={e => setCategory(e.target.value)}
          sx={{
            minWidth: { xs: '100%', sm: 160 },
            bgcolor: "#f9f9fb",
            fontSize: { xs: 14, sm: 16 },
            mb: { xs: 1, md: 0 },
          }}
        >
          {categories.map((cat, idx) => (
            <MenuItem key={idx} value={cat}>{cat}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Search anything"
          value={search}
          onChange={e => setSearch(e.target.value)}
          sx={{
            flex: 1,
            maxWidth: 900,
            bgcolor: "#FAFAFA",
            '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
            fontSize: { xs: 14, sm: 16 },
            mb: { xs: 1, md: 0 },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            )
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            fontWeight: 600,
            px: { xs: 2, sm: 4 },
            height: { xs: 44, sm: 48, md: 56 },
            fontSize: { xs: 14, sm: 16 },
            backgroundColor: "#262627",
            color: "#fff",
            width: { xs: '100%', md: 'auto' },
            mb: { xs: 1, md: 0 },
          }}
        >
          Search
        </Button>
      </Box>
      <Typography
        variant="body2"
        sx={{ mt: { xs: 2, md: 3 }, color: "#888", fontSize: { xs: 13, sm: 14 } }}
      >
        Or view the following courses...
      </Typography>
    </Paper>
  );
};

export default CourseSearchBar;
