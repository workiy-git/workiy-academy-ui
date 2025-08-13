import React from "react";
import { Card, CardContent, Typography, Chip, Button, Box } from "@mui/material";

const CourseCard = ({ course }) => (
  <Card elevation={0} sx={{ borderRadius: 4, height: "100%", bgcolor: "#fff", boxShadow: "0px 4px 24px rgba(26, 35, 126, 0.08)", transition: "transform 0.2s, box-shadow 0.2s", '&:hover': { transform: 'translateY(-8px)', boxShadow: "0px 8px 32px rgba(26, 35, 126, 0.16)" } }}>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <img src={course.image} alt={course.title} style={{ width: 64, height: 64 }} />
      </Box>
      <Typography variant="h6" sx={{ color: "#1A237E", fontWeight: 700, mb: 1, fontSize: 20, fontFamily: 'Inter, sans-serif' }} gutterBottom>
        {course.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: 15, fontFamily: 'Inter, sans-serif' }}>
        {course.description}
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Chip label={course.duration} sx={{ bgcolor: "#E3EAF2", color: "#1A237E", fontWeight: 600, fontFamily: 'Inter, sans-serif' }} icon={<span>⏱️</span>} />
        <Chip label={course.level} sx={{ bgcolor: "#E3EAF2", color: "#1A237E", fontWeight: 600, fontFamily: 'Inter, sans-serif' }} icon={<span>📊</span>} />
      </Box>
      <Button variant="outlined" color="primary" fullWidth sx={{ fontWeight: 700, borderRadius: 2, fontSize: 15, fontFamily: 'Inter, sans-serif', borderColor: "#1A237E", color: "#1A237E", '&:hover': { bgcolor: "#1A237E", color: "#fff" } }}>Read More</Button>
    </CardContent>
  </Card>
);

export default CourseCard;