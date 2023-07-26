import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import appLogo from "../asset/mapmyway.svg";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "secondary.main" }}>
        <Toolbar>
          {/* <Button color="inherit">Login</Button> */}
          <Box sx={{ flexGrow: 1 }}>
            <img src={appLogo} alt="mapmyway-logo" />
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon style={{ color: "#6685FF" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;
