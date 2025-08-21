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
export default Footer;