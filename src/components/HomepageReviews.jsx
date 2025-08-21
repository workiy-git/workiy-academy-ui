import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Paper from "@mui/material/Paper";

const reviews = [
  {
    name: "Aarav Sharma",
    course: "Machine Learning Fundamentals",
    review: "The course was well-structured and the hands-on projects helped me land my first AI internship!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {  {features.map((f, i) => (
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
    name: "Priya Patel",
    course: "Deep Learning with Neural Networks",
    review: "Amazing instructors and real-world examples. I feel confident building deep learning models now.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "John Lee",
    course: "AI for Business & Strategy",
    review: "The business applications were eye-opening. Highly recommend for anyone in management!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/65.jpg"
  }
];

const ReviewCard = ({ name, course, review, rating, avatar }) => (
  <Paper elevation={3} sx={{ p: 3, borderRadius: 4, position: "relative", minWidth: 280, maxWidth: 340, mx: "auto", mt: 6 }}>
    <Box sx={{ position: "absolute", top: -36, left: "50%", transform: "translateX(-50%)" }}>
      <Avatar src={avatar} alt={name} sx={{ width: 72, height: 72, border: "4px solid #fff", boxShadow: 2 }} />
    </Box>
    <Box sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>{name}</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{course}</Typography>
      <Rating value={rating} readOnly size="small" sx={{ mb: 1 }} />
      <Typography variant="body1" sx={{ fontStyle: "italic" }}>
        "{review}"
      </Typography>
    </Box>
  </Paper>
);

const HomepageReviews = () => (
  <Box sx={{ py: 8, bgcolor: "#f4f8fb" }}>
    <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 1 }}>
      What our Learners Say
    </Typography>
    <Typography align="center" sx={{ color: "#4ea8de", mb: 5 }}>
      100+ thousand people have already joined FutureEdge
    </Typography>
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 4 }}>
      {reviews.map((r, i) => (
        <ReviewCard key={i} {...r} />
      ))}
    </Box>
  </Box>
);

export default HomepageReviews;
