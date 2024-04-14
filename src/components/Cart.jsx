import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from "@mui/icons-material/Menu.js";
import IconButton from "@mui/material/IconButton";
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import InfoIcon from '@mui/icons-material/Info';
import {Link} from "react-router-dom";
import {useState} from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart.js";
import Grid from "@mui/material/Grid";
import CloseIcon from '@mui/icons-material/Close';
import { itemInCart, items} from "./addToCart.jsx";


export default function Cart() {


    const [state, setState] = useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 500 }}
            role="presentation"
        >
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Button onClick={toggleDrawer(anchor, false)} sx={{ color: 'black'}}>
                        <CloseIcon  sx={{ fontSize: '2rem', mt: 2}} />
                    </Button>
                </Grid>
            </Grid>
            <h1 style={{textAlign: 'center'}}>Ton Panier</h1>
            <List>
                {/* Les produits du clients ici   */}
                {/* Verifier si l'item n'est pas nul*/}
                {items.length > 0 ? items.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src={item.image} alt={item.title} style={{width: '100px', height: '100px'}}/>
                            </ListItemIcon>
                            <ListItemText primary={item.title} secondary={item.price + "FCFA"} />
                            <ListItemText primary={`Quantité: ${item.count}`} />
                            <Button onClick={() => increaseCount(item)} color="primary">+</Button>
                            <Button onClick={() => decreaseCount(item)} color="secondary">-</Button>
                            <Button onClick={() => removeFromCart(item)} color="error">Remove</Button>
                        </ListItemButton>
                    </ListItem>
                )) : <h2 style={{textAlign: 'center'}}>Ton panier est vide</h2>}
            </List>
        </Box>
    );

    return (
        <div>
            {/*<Button onClick={toggleDrawer('right', true)}>/!*Ouvrir le tiroir*!/</Button>*/}
            {/*<IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
            >*/}
                <IconButton  size="large" edge="end" color="inherit" aria-label="menu">
                    <Badge onClick={toggleDrawer('right', true)} badgeContent={itemInCart} color="inherit" >
                        <ShoppingCartIcon  sx={{ fontSize: '2rem'}}/>
                    </Badge>
                </IconButton>
                {/*<MenuIcon onClick={toggleDrawer('right', true)} sx={{ fontSize: '2rem' }}/>
            </IconButton>*/}
            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
        </div>
    );
}
