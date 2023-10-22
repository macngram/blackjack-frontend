import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

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