import React from 'react';
import { AppBar, Toolbar, Button, Box, Typography, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, GlobalStyles } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const menuItems = [
	{ label: 'Home', path: '/' },
	{ label: 'Courses', path: '/courses' },
	{ label: 'About', path: '/about' },
	{ label: 'Contact', path: '/contact' },
	{ label: 'Internship', path: '/internship' },
	{ label: 'Course', path: '/course' },
];


const NavbarMUI = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [drawerOpen, setDrawerOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setDrawerOpen((prev) => !prev);
	};

	const handleEnquiryClick = () => {
		navigate('/contact');
	};

	return (
		<>
			<GlobalStyles styles={{
				body: { fontFamily: 'Sora, sans-serif' },
				'.MuiTypography-root': { fontFamily: 'Sora, sans-serif' },
				'.MuiButton-root': { fontFamily: 'Sora, sans-serif' },
				'.MuiListItemText-root': { fontFamily: 'Sora, sans-serif' },
			}} />
			<AppBar position="static" elevation={0} sx={{ bgcolor: '#fff', borderBottom: '2px solid #704FE6', borderRadius: '0 0 5px 5px', boxShadow: 'none', color: '#212529' }}>
				<Toolbar sx={{ display: 'flex', justifyContent: 'space-between', minHeight: 64 }}>
					<Typography variant="h6" sx={{ fontWeight: 700, color: '#212529', fontFamily: 'Sora, sans-serif' }}>
						Workiy Academy
					</Typography>
					{/* Desktop Menu */}
					<Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
						{menuItems.map((item) => (
							<Button
								key={item.path}
								component={Link}
								to={item.path}
								sx={{
									fontFamily: 'Sora, sans-serif',
									color: location.pathname === item.path ? '#704FE6' : '#212529',
									fontSize: 10,
									fontWeight: 600,
									border: location.pathname === item.path ? '1.5px solid #704FE6' : '2px solid transparent',
									borderRadius: '15px',
									px: 2,
									py: 0.2,
									backgroundColor: 'transparent',
									transition: 'color 0.2s, border 0.2s',
									'&:hover': {
										color: '#704FE6',
										backgroundColor: 'rgba(112,79,230,0.08)',
									},
								}}
							>
								{item.label}
							</Button>
						))}
						<Button
							variant="contained"
							endIcon={<ArrowForwardIcon sx={{ fontSize: 15 }} />}
							sx={{
								fontFamily: 'Sora, sans-serif',
								bgcolor: '#704FE6',
								color: '#fff',
								borderRadius: '50px',
								fontWeight: 700,
								fontSize: 10,
								ml: 2,
								px: 3,
								py: 1.2,
								boxShadow: 'none',
								'&:hover': {
									bgcolor: '#5a3fd1',
								},
							}}
							onClick={handleEnquiryClick}
						>
							Enquiry
						</Button>
					</Box>
					{/* Mobile Menu Icon */}
					<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
						<IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
							<MenuIcon sx={{ color: '#704FE6', fontSize: 28 }} />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			{/* Mobile Drawer */}
			<Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
				<Box sx={{ width: 220, p: 2 }} role="presentation" onClick={handleDrawerToggle}>
					<List>
						{menuItems.map((item) => (
							<ListItem key={item.path} disablePadding>
								<ListItemButton component={Link} to={item.path} selected={location.pathname === item.path}>
									<ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: location.pathname === item.path ? 700 : 500, color: location.pathname === item.path ? '#704FE6' : '#212529', fontFamily: 'Sora, sans-serif' }} />
								</ListItemButton>
							</ListItem>
						))}
						<ListItem disablePadding>
							<ListItemButton>
								<Button
									variant="contained"
									endIcon={<ArrowForwardIcon sx={{ fontSize: 15 }} />}
									sx={{
										fontFamily: 'Sora, sans-serif',
										bgcolor: '#704FE6',
										color: '#fff',
										borderRadius: '60px',
										fontWeight: 700,
										fontSize: 10,
										width: '100%',
										boxShadow: 'none',
										'&:hover': {
											bgcolor: '#5a3fd1',
										},
									}}
									onClick={handleEnquiryClick}
								>
									Enquiry
								</Button>
							</ListItemButton>
						</ListItem>
					</List>
				</Box>
			</Drawer>
		</>
	);
}

		export default NavbarMUI;
