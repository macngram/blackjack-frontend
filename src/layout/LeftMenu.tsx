import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';

const LeftMenu = () => (
    <Paper sx={{ width: 320 }}>
        <MenuList dense>
            <MenuItem>
                <ListItemText inset>게임 목록</ListItemText>
            </MenuItem>
            <MenuItem>
                <ListItemText inset>내 정보</ListItemText>
            </MenuItem>
            <MenuItem>
                <ListItemText inset>결제하기</ListItemText>
            </MenuItem>
        </MenuList>
    </Paper>
);

export default LeftMenu