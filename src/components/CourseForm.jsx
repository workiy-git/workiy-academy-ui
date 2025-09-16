import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  MenuItem,
} from "@mui/material";

const CourseForm = ({
  newCourse,
  setNewCourse,
}) => {
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Auto-generate path based on title
    if (name === "title") {
      const generatedPath = `/courses/${value
  .toLowerCase()                     // make lowercase
  .replace(/[^a-z]+/g, "-")          // replace anything not a-z with "-"
  .replace(/-+/g, "-")               // collapse multiple "-" into one
  .replace(/^-|-$/g, "")}`;          // remove leading/trailing "-"

      setNewCourse({ ...newCourse, [name]: value, path: generatedPath });
    } else {
      setNewCourse({ ...newCourse, [name]: value });
    }
  };



  return (
    <Box
      sx={{
        p: 3,
        mb: 5,
        border: "1px solid #ddd",
        borderRadius: 3,
        backgroundColor: "#fff",
        boxShadow: 2,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        {newCourse.id ? "Edit Course" : "Add New Course"}
      </Typography>

      <Stack spacing={2}>
        {/* Title */}
        <TextField
          label="Title"
          name="title"
          value={newCourse.title}
          onChange={handleChange}
          fullWidth
        />

        {/* Description */}
        <TextField
          label="Description"
          name="description"
          value={newCourse.description}
          onChange={handleChange}
          fullWidth
          multiline
          rows={3}
        />

        {/* Duration Dropdown */}
        <TextField
          select
          label="Duration"
          name="duration"
          value={newCourse.duration}
          onChange={handleChange}
          fullWidth
        >
          {[...Array(10)].map((_, i) => (
            <MenuItem key={i + 1} value={`${i + 1} Week${i + 1 > 1 ? "s" : ""}`}>
              {i + 1} Week{i + 1 > 1 ? "s" : ""}
            </MenuItem>
          ))}
        </TextField>



        {/* Image Path Text Field */}
        <TextField
          label="Image Path or URL"
          name="image"
          value={newCourse.image}
          onChange={handleChange}
          fullWidth
        />

        {/* Level Dropdown */}
        <TextField
          select
          label="Level"
          name="level"
          value={newCourse.level}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="Beginner">Beginner</MenuItem>
          <MenuItem value="Intermediate">Intermediate</MenuItem>
          <MenuItem value="Advanced">Advanced</MenuItem>
        </TextField>

        <TextField
          select
          label="Rating"
          name="rating"
          value={newCourse.rating}
          onChange={handleChange}
          fullWidth
        >
          {[...Array(5)].map((_, i) => (
            <MenuItem key={i + 1} value={i+1}>
              {i + 1}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Lessons"
          name="lessons"
          value={newCourse.lessons}
          onChange={handleChange}
          fullWidth
        />

        {/* Action Buttons */}
        {/* <Stack direction="row" spacing={2} mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={newCourse.id ? handleUpdateCourse : handleAddCourse}
          >
            {newCourse.id ? "Update Course" : "Add Course"}
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </Stack> */}
      </Stack>
    </Box>
  );
};

export default CourseForm;
