import * as React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    Typography,

} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuList
    from './MenuList'

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };



    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        edge="start"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Trainual
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
            >
                <MenuList toggleDrawer={toggleDrawer}/>
            </Drawer>
        </div>
    );
}

export default Header
