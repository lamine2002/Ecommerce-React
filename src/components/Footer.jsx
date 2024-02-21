import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import {Facebook, Instagram, Twitter} from "@mui/icons-material";

function Footer () {


    return (
        <Box bgcolor="#000" color="white" py={2}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    Mon Projet
                </Typography>
                <Typography variant="subtitle1" align="center" color="inherit" component="p">
                    Merci de visiter mon projet
                </Typography>
                <Box mt={2} align="center">
                    <Link to="/"  style={{textDecoration: 'none', color: "#64b5f6"}}>
                        <Facebook />
                    </Link>{' '}
                    <Link to="/"  style={{textDecoration: 'none', color: "#64b5f6"}}>
                        <Instagram />
                    </Link>{' '}
                    <Link to="/"  style={{textDecoration: 'none', color: "#64b5f6"}}>
                        <Twitter />
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
