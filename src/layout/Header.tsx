import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {ToggleDrawer} from "./Layout";
import { Link } from 'react-router-dom';

interface HeaderProps {
    toggleDrawer: ToggleDrawer;
}

const Header = ({toggleDrawer}: HeaderProps) => (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => toggleDrawer('left',true)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/lobby">News</Link>
                </Typography>
                <Link to="/login">
                    <Button color="inherit">Login</Button>
                </Link>
            </Toolbar>
        </AppBar>
    </Box>
)

export default Header