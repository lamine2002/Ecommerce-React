import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {useState} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuForSmallScreen from "./MenuForSmallScreen.jsx";
import Badge from '@mui/material/Badge';
import {Link} from "react-router-dom";
import Cart from "./Cart.jsx";


const pages = [
    { name: 'Home', href: '/' },
    { name: 'Produits', href: '/products'},
    { name: 'A Propos de Nous', href: '/aboutUs' },
];
function Header() {


    return (

        <AppBar position="static" sx={{backgroundColor: 'white', color: '#000'}} elevation={0}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                    <AdbIcon sx={{ mr: 1, color: '#64b5f6'}} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            letterSpacing: '.1rem',
                            fontSize: '1.5rem',
                            color: '#64b5f6',
                            textDecoration: 'none',
                        }}
                    >
                        <Link to={"/"} style={{textDecoration: 'none'}}>
                            <span style={{color: '#64b5f6'}}>IT</span><span style={{color: '#1976d2'}}>.</span><span style={{color: '#64b5f6'}}>SN</span> <span style={{color: '#1976d2'}}>~</span><span style={{color: '#64b5f6'}}>Vente</span>
                        </Link>
                    </Typography>

                    {/* Modification du style de la boîte contenant les boutons */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} ml={30}>
                        {/*// xs: 'none' pour cacher les boutons sur les petits écrans, md: 'flex' pour afficher les boutons sur les écrans moyens, ml={30} pour ajouter une marge à gauche, flexGrow: 1 pour que la boîte s'étende sur toute la largeur disponible*/}
                        {pages.map((page,index) => (

                            <Button
                                key={index}
                                component={Link}
                                to={page.href}
                                sx={{ color: 'inherit', fontWeight: 400, ml:7, fontSize: '1.1rem'}}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ display: { xs: 'flex', }, ml: 'auto' }}>
                        <Tooltip title="Shopping Cart" arrow sx={{ ml: 'auto' }}>
                            {/*<IconButton size="large" edge="end" color="inherit" aria-label="menu">
                                <Badge badgeContent={2} color="inherit" >
                                    <ShoppingCartIcon sx={{ fontSize: '2rem'}}/>
                                </Badge>
                            </IconButton>*/}
                            <Cart />
                        </Tooltip>
                    </Box>

                    {/*// pour les petits écrans creer un drawer*/}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, }}>
                        <MenuForSmallScreen />
                    </Box>
                </Toolbar>

            </Container>
        </AppBar>

    );
}
export default Header;