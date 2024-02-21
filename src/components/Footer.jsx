import * as React from 'react';
import { Box, Grid, Link, Typography, Container, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

// Replace these with your own social media URLs
const socialMediaLinks = {
    facebook: '#',
    twitter: '#',
    instagram: '#',
};

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                color: 'text.secondary',
                // py: 3,
                borderTop: '1px solid',
                borderColor: 'divider',
                fontWeight: 400,
            }}
        >
            <Container maxWidth={false} sx={{ backgroundColor: "#2f2f2f", color:"#fff"}}>
                <Grid container spacing={2} justifyContent="space-between">
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h4" component="h1" color="#64b5f6" gutterBottom sx={{marginTop: '20%',
                            '@media (max-width: 600px)': {
                                marginTop: '0',
                            }
                        }}>
                            IT.SN~VENTES
                        </Typography>
                        {/* Add your logo component or image here */}
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle1" color="#fff" gutterBottom>
                            PRODUCT
                        </Typography>
                        <Link href="#" color="inherit" display="block">Features</Link>
                        <Link href="#" color="inherit" display="block">Integrations</Link>
                        <Link href="#" color="inherit" display="block">Pricing</Link>
                        <Link href="#" color="inherit" display="block">FAQ</Link>
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle1" color="#fff" gutterBottom>
                            COMPANY
                        </Typography>
                        <Link href="#" color="inherit" display="block">About Us</Link>
                        <Link href="#" color="inherit" display="block">Careers</Link>
                        <Link href="#" color="inherit" display="block">Privacy Policy</Link>
                        <Link href="#" color="inherit" display="block">Terms of Service</Link>
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle1" color="#fff" gutterBottom>
                            DEVELOPERS
                        </Typography>
                        <Link href="#" color="inherit" display="block">Public API</Link>
                        <Link href="#" color="inherit" display="block">Documentation</Link>
                        <Link href="#" color="inherit" display="block">Guides</Link>
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle1" color="#fff" gutterBottom>
                            SOCIAL MEDIA
                        </Typography>
                        <IconButton aria-label="Facebook" color="inherit" component="a" href={socialMediaLinks.facebook}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="Twitter" color="inherit" component="a" href={socialMediaLinks.twitter}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton aria-label="Instagram" color="inherit" component="a" href={socialMediaLinks.instagram}>
                            <InstagramIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Typography variant="body2" color="#fff" align="center" sx={{ pt: 4, pb: 2}}>
                    © 2024 Company Co. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;