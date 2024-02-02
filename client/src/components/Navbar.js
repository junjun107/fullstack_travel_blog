import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
import { ReactComponent as MapMyWayLogo } from "../asset/mapmyway-high-res-logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { logout } = useLogout();
  const { user } = useAuthContext();

  // console.log(user);
  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(isOpen);
  };

  const handleClick = () => {
    logout();
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {/* only show logout when no user  */}
        {!user && (
          <ListItem>
            <ListItemButton component={Link} to="/login">
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
        )}

        {/* only show logout when user  */}
        {user && (
          <ListItem>
            <span>{user.email}</span>
            <ListItemButton component="a" onClick={handleClick}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </div>
  );

  return (
    <div>
      <AppBar
        position="sticky"
        elevation={0}
        sx={(theme) => ({
          backgroundColor: theme.palette.primary.contrastText,
        })}
      >
        <Toolbar>
          <ListItemButton component={Link} to="/">
            <MapMyWayLogo />
          </ListItemButton>

          <IconButton edge="end" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
        {list()}
      </Drawer>
    </div>
  );
};

export default Navbar;
