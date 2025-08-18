import React from "react";
import { Card, CardContent, Typography, Chip, Button, Box } from "@mui/material";

const CourseCard = ({ course }) => (
  <Card
    elevation={0}
    sx={{
      borderRadius: 4,
      width: { xs: 200, sm: 220, md: 240 },
      aspectRatio: '1 / 1',
      bgcolor: '#fff',
      boxShadow: '0px 4px 24px rgba(26, 35, 126, 0.08)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      mx: 'auto',
      p: { xs: 1, sm: 1.5, md: 2 },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0px 8px 32px rgba(26, 35, 126, 0.16)',
      },
    }}
  >
    <CardContent sx={{ p: 0 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
        <img
          src={course.image}
          alt={course.title}
          style={{ width: '48px', height: '48px', objectFit: 'contain' }}
        />
      </Box>
      <Typography
        variant="h6"
        sx={{
          color: '#22223b',
          fontWeight: 700,
          mb: 0.5,
          fontSize: { xs: 16, sm: 17, md: 18 },
          fontFamily: 'Inter, sans-serif',
          textAlign: 'left',
        }}
        gutterBottom
      >
        {course.title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          mb: 1,
          fontSize: { xs: 13, sm: 14, md: 15 },
          fontFamily: 'Inter, sans-serif',
          textAlign: 'left',
        }}
      >
        {course.description}
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, mb: 2, justifyContent: 'left' }}>
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ fontSize: 18, color: '#FFD700', marginRight: 2 }}>⭐</span>
        ))}

      </Box>

      <Button
        variant="outlined"
        color="primary"
        fullWidth
        sx={{
          fontWeight: 700,
          borderRadius: 2,
          fontSize: { xs: 13, sm: 14, md: 15 },
          fontFamily: 'Inter, sans-serif',
          borderColor: '#22223b',
          color: '#22223b',
          py: 0.7,
          mt: 0.5,
          '&:hover': { bgcolor: '#22223b', color: '#fff' },
        }}
      >
        Read More
      </Button>
    </CardContent>
  </Card>
);

export default CourseCard;