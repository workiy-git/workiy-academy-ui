import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Paper from "@mui/material/Paper";


// All UI text and reviews data in a single JSON object
const homepageReviewsData = {
  title: "What our Learners Say",
  subtitle: "100+ people have already joined FutureEdge",
  reviews: [
    {     
      name: "Hari Krishnan",
      course: "MERN Stack",
review: "I recently completed the MERN Stack training program at Workiy Academy, and I'm thrilled with the results. The program was intensive and challenging, but the instructors were knowledgeable and supportive throughout the process. They taught us the latest technologies and industry trends, and we got hands-on experience working on real-world projects. They provided extensive placement assistance and connected me with various companies looking for software professionals. Thanks to their efforts, I received multiple job offers and accepted an excellent position with a reputable company.",
rating: 5,
avatar: "https://subtle-beige-cxacauzkop.edgeone.app/hari%20vc.jpg"
    },
    {
      name: "Supriya",
      course: "MERN Stack",
review: "I can't thank Workiy Academy enough for the exceptional training and placement support that helped me secure my dream job with the best package. Their training program was comprehensive and hands-on, and the instructors were experts in their fields who provided invaluable insights and guidance. Moreover, their placement team was exceptional in helping me identify job opportunities that aligned with my career goals and preferences. They provided me with several job leads, arranged mock interviews, and helped me refine my resume and interviewing skills. Thanks to their efforts, I landed an excellent job in a Workiy company that offered me the best package.",
      rating: 5,
      avatar: "https://rotten-orange-8ukiklmwr8.edgeone.app/supriya.png"
    },
    {
      name: "Sabica Jasmin",
      course: "MERN Stack",
review: `I am incredibly grateful to Workiy Academy for their outstanding training and placement support, which played a crucial role in helping me secure my dream job as a MERN Stack Developer with an exceptional compensation package.
The training program offered by Workiy Academy was truly comprehensive and hands-on, allowing me to gain practical.

Thanks to the tireless efforts of the Workiy Academy team, I was able to secure an excellent position with a highly reputable company.

I cannot express enough gratitude to Workiy Academy for their unwavering support and dedication. Their training program and placement assistance truly made a significant difference in launching my career as a Web Developer.`,
      rating: 5,
      avatar: "https://curious-peach-kbjig0xujx.edgeone.app/sabica%20(1).jpg"
    }
  ]
};

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
      <Typography variant="body1" sx={{ fontStyle: "italic", fontSize: { xs: 13, sm: 14, md: 15 }, textAlign: 'justify' }}>
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
      {homepageReviewsData.title}
    </Typography>
    <Typography align="center" sx={{ color: "#4ea8de", mb: { xs: 3, sm: 5 }, fontSize: { xs: 13, sm: 15 } }}>
      {homepageReviewsData.subtitle}
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
      {homepageReviewsData.reviews.map((r, i) => (
        <ReviewCard key={i} {...r} />
      ))}
    </Box>
  </Box>
);

export default HomepageReviews;
