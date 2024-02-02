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


const pages = ['home', 'Products', 'About Us'];
function Header() {


    return (

        <AppBar position="static" sx={{backgroundColor: 'white', color: '#64b5f6'}} elevation={0}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            fontSize: '2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        IT<span style={{color: '#1976d2'}}>.</span>SN <span style={{color: '#1976d2'}}>~</span>Vente
                    </Typography>

                    {/* Modification du style de la boîte contenant les boutons */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} ml={30}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                variant="text"
                                sx={{ color: 'inherit', fontWeight: 400, ml:7, fontSize: '1.1rem'}}
                                href={`${page}`}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>

            </Container>
        </AppBar>

    );
}
export default Header;