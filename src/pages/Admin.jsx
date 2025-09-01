import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import CourseForm from "../components/CourseForm";
import CourseDetailsForm from "../components/CourseDetailsForm";

const Admin = () => {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);

    // Store course details form data
    const [courseDetailsData, setCourseDetailsData] = useState(null);

    // Save both forms together
    const handleSaveBoth = async () => {
      try {
        if (newCourse.id) {
          // Edit mode
          await axios.put(`http://127.0.0.1:8000/api/courses/${newCourse.id}`, newCourse);
          console.log("Updated course:", newCourse);
          if (courseDetailsData && courseDetailsData.id) {
            await axios.put(`http://127.0.0.1:8000/api/course-details/${courseDetailsData.id}`, courseDetailsData);
            console.log("Updated course details:", courseDetailsData);
          }
        } else {
          // Add mode
          await axios.post("http://127.0.0.1:8000/api/courses", newCourse);
          if (courseDetailsData) {
            await axios.post("http://127.0.0.1:8000/api/course-details", courseDetailsData);
          }
        }
        fetchCourses();
        setShowForm(false);
      } catch (err) {
        console.error("Error saving course and details:", err);
      }
    };
  // Edit Confirmation State
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Delete Confirmation State
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteCourseId, setDeleteCourseId] = useState(null);
  const [courseDetails, setCourseDetails] = useState([]);

  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    duration: "",
    image: "",
    level: "",
    path: "",
  });

  // Fetch courses from API
  const fetchCourses = () => {
    axios
      .get("http://127.0.0.1:8000/api/courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.error("Error fetching courses:", err));
  };

  console.log("Course Details Data:", courseDetailsData);

  useEffect(() => {
    fetchCourses();
  }, []);

  // Add New Course
  const handleAddCourse = () => {
    axios
      .post("http://127.0.0.1:8000/api/courses", newCourse)
      .then(() => {
        fetchCourses();
        setNewCourse({
          title: "",
          description: "",
          duration: "",
          image: "",
          level: "",
          path: "",
        });
        setShowForm(false);
      })
      .catch((err) => console.error("Error adding course:", err));
  };

  // Open Edit Confirmation Dialog
  const handleEditClick = async (course) => {
  setSelectedCourse(course);
  setOpenEditDialog(true);

  const lastSegment = course.path.split("/").filter(Boolean).pop();

  // Only fetch if we don't already have the data for this course
  if (!courseDetailsData || courseDetailsData.course_id !== course.id) {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/course-details/${lastSegment}`);
      setCourseDetailsData(res.data || null);
    } catch (err) {
      setCourseDetailsData(null);
      console.error("Error fetching course details for edit:", err);
    }
  }
};


  // Confirm Edit
  const handleConfirmEdit = () => {
    setOpenEditDialog(false);
    setNewCourse(selectedCourse);
    setShowForm(true);
    // CourseDetailsData is already set by handleEditClick
  };

  // Cancel Edit
  const handleCancelEdit = () => {
    setOpenEditDialog(false);
    setSelectedCourse(null);
  };

  // Save Edited Course
  const handleUpdateCourse = () => {
    axios
      .put(`http://127.0.0.1:8000/api/courses/${newCourse.id}`, newCourse)
      .then(() => {
        fetchCourses();
        setShowForm(false);
        setNewCourse({
          title: "",
          description: "",
          duration: "",
          image: "",
          level: "",
          path: "",
        });
      })
      .catch((err) => console.error("Error updating course:", err));
  };

  // Open Delete Confirmation Dialog
  const handleDeleteClick = (id) => {
    setDeleteCourseId(id);
    setOpenDeleteDialog(true);
  };

  // Confirm Delete
  const handleConfirmDelete = () => {
    axios
      .delete(`http://127.0.0.1:8000/api/courses/${deleteCourseId}`)
      .then(() => {
        fetchCourses();
        setOpenDeleteDialog(false);
        setDeleteCourseId(null);
      })
      .catch((err) => console.error("Error deleting course:"));
  };

  // Cancel Delete
  const handleCancelDelete = () => {
    setOpenDeleteDialog(false);
    setDeleteCourseId(null);
  };

  return (
    <Box sx={{ bgcolor: "#F6F8FB", minHeight: "100vh", py: 4 }}>
      <Container>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
          Admin Dashboard - Manage Courses
        </Typography>

        {/* Add Button */}
        {!showForm && (
          <Button
            variant="contained"
            color="primary"
            sx={{ mb: 3 }}
            onClick={() => setShowForm(true)}
          >
            + Add New Course
          </Button>
        )}

        {/* Course Form */}
        {showForm && (
          <>
            <CourseForm
              newCourse={newCourse}
              setNewCourse={setNewCourse}
              setShowForm={setShowForm}
            />
            <Box sx={{ mt: 4 }}>
              <CourseDetailsForm
                onFormDataChange={(data) => setCourseDetailsData((prev) => {
                  if (JSON.stringify(prev) === JSON.stringify(data)) return prev; // Prevent useless updates
                  return data;
                })}
                initialData={courseDetailsData}
              />
  
            </Box>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Button variant="contained" color="primary" onClick={handleSaveBoth}>
                Save Course & Details
              </Button>
            </Box>
          </>
        )}



        {/* Display Courses */}
        <Grid container spacing={3}>
          {courses.map((course) => (
            <Grid sx={{margin:'auto'}} item xs={12} sm={6} md={4} key={course.id}>
              <Card sx={{ boxShadow: 3, borderRadius: 2, width: '320px' }}>
                <CardMedia
                  component="img"
                  height="160"
                  image={course.image}
                  alt={course.title}
                />
                <CardContent>
                  <Typography variant="h6">{course.title}</Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mt: 1 }}
                  >
                    {course.description}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ mt: 1 }}>
                    Duration: {course.duration}
                  </Typography>
                  <Typography variant="subtitle2">
                    Level: {course.level}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="warning"
                    variant="contained"
                    onClick={() => handleEditClick(course)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    variant="contained"
                    onClick={() => handleDeleteClick(course.id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Edit Confirmation Dialog */}
      <Dialog open={openEditDialog} onClose={handleCancelEdit}>
        <DialogTitle>Confirm Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to edit this course?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelEdit} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleConfirmEdit}
            color="primary"
            variant="contained"
          >
            Yes, Edit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDeleteDialog} onClose={handleCancelDelete}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to remove this course? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleConfirmDelete}
            color="error"
            variant="contained"
          >
            Yes, Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Admin;
