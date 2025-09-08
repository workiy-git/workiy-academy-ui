import React, { useEffect, useState} from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import config from "../config/config";



const courseList = [
  {
    title: "Learn Figma - UI/UX Design Essential Training",
    lessons: 8,
    students: 198,
    level: "Beginner",
    rating: 4,
    image: "https://i.ibb.co/hFBsFqGP/unsplash-7u-SKXpks-CKg.png",
    path: "https://production.d2ggwqvu23n3mj.amplifyapp.com/courses"
  },
  {
    title: "Python for Beginners - Learn Programming from scratch",
    lessons: 21,
    students: 99,
    level: "Beginner",
    rating: 3,
    image: "https://i.ibb.co/1G268Rjx/learning-education-ideas-insight-intelligence-study-concept.png",
    path: "https://production.d2ggwqvu23n3mj.amplifyapp.com/courses"
  },
  {
    title: "Mobile App Development with Flutter & Dart",
    lessons: 15,
    students: 215,
    level: "Advanced",
    rating: 2,
    image: "https://i.ibb.co/rKb60RNF/unsplash-b-OKIpt-Pzd-Pk.png",
    path: "https://production.d2ggwqvu23n3mj.amplifyapp.com/courses"
  }
];

const CourseSearchBar = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [suggestions, setSuggestions] = useState([]);

  const handleCategoryClick = (cat) => {
    setCategory(cat);
  };


    const [course, setCourses] = useState([]);
      
            useEffect(() => {
              axios.get(`${config.apiUrl}/courses`)
                .then((res) => setCourses(res.data))
                .catch((err) => console.error("Error fetching courses:", err));
            }, []);
      
            console.log("Fetched Courses:", course.length);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length > 0) {
      const filtered = courseList.filter(course =>
        course.title.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search logic here
  };

  return (
    <Paper elevation={0} sx={{ width: '100vw', maxWidth: '100vw', mx: 0, my: 6, p: { xs: 2, md: 4 }, borderRadius: 0, textAlign: "center", bgcolor: "#fff", boxShadow: 'none', position: 'relative' }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: "#262627" }}>
        Search among <span style={{ color: '#5A69F2' }}>{course.length}</span> courses and find your favorite course
      </Typography>
     
      <Box component="form" sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 1, alignItems: "center", justifyContent: "center", mt: 3, position: 'relative' }}>
        <Box sx={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <TextField
            label="Search anything"
            value={search}
            onChange={handleSearchChange}
            sx={{ flex: 1, maxWidth: 900, bgcolor: "#FAFAFA", '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="primary" />
                </InputAdornment>
              )
            }}
            autoComplete="off"
            fullWidth
          />
          {suggestions.length > 0 && (
            <Box sx={{ position: "absolute", top: 56, left: '50%', transform: 'translateX(-50%)', zIndex: 10, bgcolor: "#fff", boxShadow: 2, borderRadius: 1, maxHeight: 240, overflowY: 'auto', width: '100%', maxWidth: 900 }}>
              {suggestions.map((course, idx) => (
                <Box
                  key={idx}
                  sx={{ p: 1.5, cursor: "pointer", textAlign: 'left', '&:hover': { bgcolor: "#f0f0f0" }, borderBottom: idx !== suggestions.length - 1 ? '1px solid #eee' : 'none' }}
                  onClick={() => window.open(course.path, "_blank")}
                >
                  {course.title}
                </Box>
              ))}
            </Box>
          )}
        </Box>
        <Button type="submit" variant="contained" sx={{ mr: { xs: 0, md: 10 }, fontWeight: 600, px: 4, height: 56, backgroundColor: "#262627", color: "#fff" }}>
          Search
        </Button>
      
      </Box>
      
    </Paper>
  );
};

export default CourseSearchBar;
