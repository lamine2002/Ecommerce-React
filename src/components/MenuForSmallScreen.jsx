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

export default function MenuForSmallScreen() {
    const [state, setState] = React.useState({
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
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {[
                    { name: 'Home', href: '/' },
                    { name: 'Produits', href: '/products'},
                    { name: 'A Propos de Nous', href: '/aboutUs' },
                ].map((text, index) => (
                    <Link to={text.href}
                            style={{textDecoration: 'none', color: 'black'}}
                            key={index}
                    >
                        <ListItem key={index} disablePadding>
                            <ListItemButton>

                                <ListItemIcon>
                                    {index === 0 ? <HomeIcon /> : index === 1 ? <InventoryIcon /> : <InfoIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text.name} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {/*<Button onClick={toggleDrawer('right', true)}>/!*Ouvrir le tiroir*!/</Button>*/}
            <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
            >
                <MenuIcon onClick={toggleDrawer('right', true)} sx={{ fontSize: '2rem' }}/>
            </IconButton>
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
