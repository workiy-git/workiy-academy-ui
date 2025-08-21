import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkIcon from "@mui/icons-material/Work";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const features = [
  {
    icon: <WorkspacePremiumIcon color="primary" sx={{ fontSize: 40 }} />,
    title: "In-Demand Certifications",
    desc: "FutureEdge provides courses that offer industry-relevant professional certification from CIMA, ACCA, NSDC, FPSB India and others.",
  },
  {
    icon: <AutoStoriesIcon color="primary" sx={{ fontSize: 40 }} />,
    title: "Hands-on Learning",
    desc: "Our one-of-a-kind active learning system delivers concept-based application-oriented learning and skill upgradation.",
  },
  {
    icon: <AccessTimeIcon color="primary" sx={{ fontSize: 40 }} />,
    title: "Convenient Flexible Learning",
    desc: "The flexible learning method is designed to meet working professionals’ and students’ unique schedules and specific needs.",
  },
  {
    icon: <GroupsIcon color="primary" sx={{ fontSize: 40 }} />,
    title: "Expert Faculty",
    desc: "Our training faculty members of handpicked industry experts and experienced professionals deliver exceptional experiential training.",
  },
  {
    icon: <WorkIcon color="primary" sx={{ fontSize: 40 }} />,
    title: "3+ Year Placement Assistance",
    desc: "Get jobs aligned with career goals and choose from a list of curated matching preferences. Comprehensive interview preparation and resume building.",
  },
  {
    icon: <TrendingUpIcon color="primary" sx={{ fontSize: 40 }} />,
    title: "Growth Support Mentors",
    desc: "Growth support mentors help improve learning and enhance career aspirations with candidates’ potential.",
  },
];

const HomepageFeatures = () => (
  <Box sx={{ py: 8, bgcolor: "#f4f8fb" }}>
    <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 1 }}>
      Why Choose FutureEdge?
    </Typography>
    <Grid
      container
      spacing={4}
      justifyContent="center"
      alignItems="stretch"
      sx={{ mt: 3, maxWidth: 1200, mx: "auto" }}
    >
      {features.map((f, i) => (
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
        </Grid>
      ))}
    </Grid>
    
  </Box>
);

export default HomepageFeatures;
