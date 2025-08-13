import React from "react";
import Box from "@mui/material/Box";
import Carousel from "react-material-ui-carousel";

const BannerCarousel = ({ slides }) => (
  <Box sx={{ width: "100%", p: 0, m: 0 }}>
    <Carousel
      indicators={true}
      navButtonsAlwaysVisible={true}
      interval={5000}
      animation="slide"
      sx={{ width: "100%", height: "400px" }}
    >
      {slides.map((slide, idx) => (
        <Box
          key={idx}
          sx={{
            width: "100%",
            position: "relative",
            aspectRatio: '16/9', // Ensures HD ratio
            overflow: 'hidden',
          }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: 'block',
            }}
          />
        </Box>
      ))}
    </Carousel>
  </Box>
);

export default BannerCarousel;
