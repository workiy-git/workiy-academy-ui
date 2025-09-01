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
  handleAddCourse,
  handleUpdateCourse,
  setShowForm,
}) => {
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Auto-generate path based on title
    if (name === "title") {
      const generatedPath = `/courses/${value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")}`;
      setNewCourse({ ...newCourse, [name]: value, path: generatedPath });
    } else {
      setNewCourse({ ...newCourse, [name]: value });
    }
  };

  // Handle image upload (store only image path)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Store only the path instead of the File object
      const imagePath = `/uploads/${file.name}`;
      setNewCourse({ ...newCourse, image: imagePath });
    }
  };

  // Handle cancel action
  const handleCancel = () => {
    setShowForm(false);
    setNewCourse({
      title: "",
      description: "",
      duration: "",
      image: "",
      level: "",
      path: "",
    });
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

        {/* Image Upload */}
        <Button variant="outlined" component="label">
          {newCourse.image ? "Change Image" : "Upload Image"}
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
        </Button>

        {/* Show Selected Image Path */}
        {newCourse.image && (
          <Typography variant="body2" color="textSecondary">
            Selected Image: {newCourse.image}
          </Typography>
        )}

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

        {/* Action Buttons */}
        <Stack direction="row" spacing={2} mt={2}>
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
        </Stack>
      </Stack>
    </Box>
  );
};

export default CourseForm;
