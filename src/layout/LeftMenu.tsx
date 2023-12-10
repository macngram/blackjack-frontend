import * as React from 'react';
import { Link } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ListItemText from '@mui/material/ListItemText';
import {Box, Divider, List, ListItem, ListItemButton, ListItemIcon, SwipeableDrawer} from '@mui/material';
import {Anchor, StateType, ToggleDrawer} from "./Layout";


interface LeftMenuProps {
    state: StateType;
    toggleDrawer: ToggleDrawer;
}

const LeftMenu = ({state, toggleDrawer}: LeftMenuProps) => {

    const menus = [
        {name:'로비', url:'/lobby'},
        {name:'방', url:'/room'},
        {name:'개인정보 수정', url:'/lobby'}
    ]
    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => toggleDrawer(anchor, false)}
            onKeyDown={() => toggleDrawer(anchor, false)}
        >
            <List>
                {menus.map((menu, index) => (
                    <Link to={menu.url}>
                        <ListItem key={menu.name} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={menu.name} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );
    return (
        <div>
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={()=> toggleDrawer(anchor, false)}
                        onOpen={() =>toggleDrawer(anchor, true)}
                        sx={{ marginTop:70 }}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    )
}

export default LeftMenu