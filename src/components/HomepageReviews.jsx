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
  {
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
  <Paper
    elevation={3}
    sx={{
      p: { xs: 2, sm: 3 },
      borderRadius: 4,
      position: "relative",
      minWidth: { xs: 220, sm: 260, md: 280 },
      maxWidth: { xs: 260, sm: 320, md: 340 },
      mx: "auto",
      mt: { xs: 4, sm: 6 },
    }}
  >
    <Box sx={{ position: "absolute", top: -36, left: "50%", transform: "translateX(-50%)" }}>
      <Avatar src={avatar} alt={name} sx={{ width: 64, height: 64, border: "4px solid #fff", boxShadow: 2 }} />
    </Box>
    <Box sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: 15, sm: 17, md: 19 } }}>{name}</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontSize: { xs: 12, sm: 13, md: 14 } }}>{course}</Typography>
      <Rating value={rating} readOnly size="small" sx={{ mb: 1 }} />
      <Typography variant="body1" sx={{ fontStyle: "italic", fontSize: { xs: 13, sm: 14, md: 15 } }}>
        "{review}"
      </Typography>
    </Box>
  </Paper>
);

const HomepageReviews = () => (
  <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, bgcolor: "#f4f8fb" }}>
    <Typography
      variant="h5"
      align="center"
      sx={{ fontWeight: 700, mb: 1, fontSize: { xs: 18, sm: 22, md: 28 } }}
    >
      What our Learners Say
    </Typography>
    <Typography align="center" sx={{ color: "#4ea8de", mb: { xs: 3, sm: 5 }, fontSize: { xs: 13, sm: 15 } }}>
      100+ thousand people have already joined FutureEdge
    </Typography>
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: 'column', sm: 'row' },
        flexWrap: { xs: 'nowrap', sm: 'wrap' },
        justifyContent: "center",
        alignItems: { xs: 'center', sm: 'stretch' },
        gap: { xs: 2, sm: 4 },
      }}
    >
      {reviews.map((r, i) => (
        <ReviewCard key={i} {...r} />
      ))}
    </Box>
  </Box>
);

export default HomepageReviews;
