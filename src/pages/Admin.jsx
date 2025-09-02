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
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";

import CourseForm from "../components/CourseForm";
import CourseDetailsForm from "../components/CourseDetailsForm";

const Admin = () => {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form States
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    duration: "",
    image: "",
    level: "",
    path: "", // Will now sync automatically
  });
  const [courseDetailsData, setCourseDetailsData] = useState(null);

  // Dialog States
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteCourseId, setDeleteCourseId] = useState(null);

  // Snackbar State
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Fetch all courses
  const fetchCourses = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://127.0.0.1:8000/api/courses");
      setCourses(res.data || []);
    } catch (err) {
      console.error("Error fetching courses:", err);
      showSnackbar("Failed to fetch courses", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Show Snackbar
  const showSnackbar = (message, severity = "success") => {
    setSnackbar({ open: true, message, severity });
  };

  // Close Snackbar
  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };


  // Handle Save (Add or Update)
  const handleSaveBoth = async () => {
  try {
    setLoading(true);

    let savedCourse;

    // Save or update course first
    if (newCourse.id) {
      const res = await axios.put(
        `http://127.0.0.1:8000/api/courses/${newCourse.id}`,
        newCourse
      );
      savedCourse = res.data;
    } else {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/courses",
        newCourse
      );
      savedCourse = res.data;
    }

    // Prepare updated course details with correct path
    const updatedCourseDetails = {
      ...courseDetailsData,
      course_id: savedCourse.id,
      path: `${savedCourse.title.toLowerCase().replace(/\s+/g, "-")}`,
    };

    // Save or update course details
    if (courseDetailsData?.id) {
      await axios.put(
        `http://127.0.0.1:8000/api/course-details/${courseDetailsData.path}`,
        updatedCourseDetails
      );
    } else {
      await axios.post(
        "http://127.0.0.1:8000/api/course-details",
        updatedCourseDetails
      );
    }

    showSnackbar("Course & details saved successfully!", "success");
    fetchCourses();
    resetForm();
  } catch (err) {
    console.error("Error saving course:", err);
    showSnackbar("Failed to save course", "error");
  } finally {
    setLoading(false);
  }
};

  // Handle Edit
  const handleEditClick = async (course) => {
    setSelectedCourse(course);
    setOpenEditDialog(true);
    const lastPart = course.path.split('/').pop();

    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/api/course-details/${lastPart}`
      );
      const details = res.data || null;
      setCourseDetailsData(details);

      // ✅ Sync the course path from the fetched details
      if (details?.path) {
        setNewCourse({ ...course, path: details.path });
      }
    } catch (err) {
      console.error("Error fetching course details:", err);
      setCourseDetailsData(null);
    }
  };

  const handleConfirmEdit = () => {
    setNewCourse(selectedCourse);
    setShowForm(true);
    setOpenEditDialog(false);
  };

  const handleCancelEdit = () => {
    setSelectedCourse(null);
    setOpenEditDialog(false);
  };

  // Handle Delete
  const handleDeleteClick = (id) => {
    setDeleteCourseId(id);
    setOpenDeleteDialog(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/courses/${deleteCourseId}`
      );
      showSnackbar("Course deleted successfully!", "success");
      fetchCourses();
    } catch (err) {
      console.error("Error deleting course:", err);
      showSnackbar("Failed to delete course", "error");
    } finally {
      setOpenDeleteDialog(false);
      setDeleteCourseId(null);
    }
  };

  const handleCancelDelete = () => {
    setOpenDeleteDialog(false);
    setDeleteCourseId(null);
  };

  // Reset Form State
  const resetForm = () => {
    setNewCourse({
      title: "",
      description: "",
      duration: "",
      image: "",
      level: "",
      path: "",
    });
    setCourseDetailsData(null);
    setShowForm(false);
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
                onFormDataChange={(data) => setCourseDetailsData(data)}
                initialData={courseDetailsData}
              />
            </Box>
            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSaveBoth}
                disabled={
                  loading ||
                  !newCourse.title ||
                  !newCourse.description ||
                  !newCourse.duration
                }
              >
                {loading ? <CircularProgress size={24} /> : "Save Course & Details"}
              </Button>
            </Box>
          </>
        )}

        {/* Display Courses */}
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {loading ? (
            <Box sx={{ width: "100%", textAlign: "center", mt: 5 }}>
              <CircularProgress />
            </Box>
          ) : courses.length === 0 ? (
            <Typography sx={{ mt: 3, mx: "auto" }}>No courses found.</Typography>
          ) : (
            courses.map((course) => (
              <Grid sx={{ margin: "auto" }} item xs={12} sm={6} md={4} key={course.id}>
                <Card sx={{ boxShadow: 3, borderRadius: 2, width: "320px" }}>
                  <CardMedia
                    component="img"
                    height="160"
                    image={course.image || "/fallback.jpg"}
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
            ))
          )}
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

      {/* Snackbar for Notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Admin;
