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


const pages = ['home', 'Products', 'About Us'];
function Header() {


    return (

        <AppBar position="static" sx={{backgroundColor: 'white', color: '#64b5f6'}} elevation={0}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                    <AdbIcon sx={{ mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            letterSpacing: '.1rem',
                            fontSize: '1.5rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        IT<span style={{color: '#1976d2'}}>.</span>SN <span style={{color: '#1976d2'}}>~</span>Vente
                    </Typography>

                    {/* Modification du style de la boîte contenant les boutons */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} ml={30}>
                        {/*// xs: 'none' pour cacher les boutons sur les petits écrans, md: 'flex' pour afficher les boutons sur les écrans moyens, ml={30} pour ajouter une marge à gauche, flexGrow: 1 pour que la boîte s'étende sur toute la largeur disponible*/}
                        {pages.map((page) => (
                            <Button
                                key={page}
                                variant="text"
                                sx={{ color: 'inherit', fontWeight: 400, ml:7, fontSize: '1.1rem'}}
                                href={`${page.split(" ").join("").toLowerCase()}`}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Tooltip title="Shopping Cart" arrow sx={{ ml: 'auto' }}>
                        <IconButton size="large" edge="end" color="inherit" aria-label="menu">
                            <Badge badgeContent={2} color="info" >
                                <ShoppingCartIcon sx={{ fontSize: '2rem' }}/>
                            </Badge>
                        </IconButton>
                    </Tooltip>

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