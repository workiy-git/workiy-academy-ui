import React, { useState } from "react";
import Box from "@mui/material/Box";
import Carousel from "react-material-ui-carousel";

const BannerCarousel = ({ slides }) => {

  const [active, setActive] = useState(0);
  const handleChange = (now) => setActive(now);

  return (
    <Box sx={{ width: "100%", p: 0, m: 0, position: 'relative' }}>
      <Carousel
        indicators={false}
        navButtonsAlwaysVisible={false}
        navButtonsWrapperProps={{ style: { display: 'none' } }}
        navButtonsProps={{ style: { display: 'none' } }}
        interval={5000}
        animation="slide"
        sx={{ width: "100%", height: { xs: '180px', sm: '260px', md: '400px' } }}
        index={active}
        onChange={handleChange}
      >
        {slides.map((slide, idx) => (
          <Box
            key={idx}
            sx={{
              width: "100%",
              height: { xs: '180px', sm: '260px', md: '400px' },
              position: "relative",
              overflow: "hidden",
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        ))}
      </Carousel>
      {/* Custom animated dots at the bottom */}
      <Box sx={{
        position: 'absolute',
        left: 0,
        bottom: { xs: 12, sm: 18 },
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 2,
        pointerEvents: 'none',
      }}>
        <Box sx={{ display: 'flex', gap: 1.2 }}>
          {slides.map((_, idx) => (
            <Box
              key={idx}
              sx={{
                width: active === idx ? 18 : 10,
                height: 10,
                borderRadius: 5,
                background: active === idx ? 'linear-gradient(90deg, #5A69F2 0%, #7B61FF 100%)' : '#e3e8ff',
                transition: 'all 0.35s cubic-bezier(.4,2,.6,1)',
                transform: active === idx ? 'scale(1.2)' : 'scale(1)',
                boxShadow: active === idx ? '0 2px 8px 0 rgba(90,105,242,0.10)' : 'none',
                pointerEvents: 'auto',
                cursor: 'pointer',
              }}
              onClick={() => setActive(idx)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BannerCarousel;
