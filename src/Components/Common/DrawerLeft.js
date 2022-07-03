import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

import ListAltIcon from '@mui/icons-material/ListAlt';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const navigate = useNavigate();
  const sidebarMenus =[
    {
      label: 'Projects',
      href: "/"
    },
    {
      label: 'Epics',
      href: "/epics"
    }
  ]
  const index = sidebarMenus.findIndex(item => item.href === window.location.pathname);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {sidebarMenus[index].label}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#06aee3',
          },
        }}
        variant="permanent"
        anchor="left"
        className="cus-drawer"
      >
        <div className="sidebar-logo">
          <img src="./images/logo.png" />
        </div>
        <List className="sidebar-menus">
          {sidebarMenus.map((item, index) => (
            <ListItem key={index} disablePadding onClick={() => navigate(item.href, {state:{label:item.label}})}>
              <ListItemButton className="menus-listing">
                <ListItemIcon>
                  {index % 2 === 0 ? <ListAltIcon /> : <PlaylistAddIcon />}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
