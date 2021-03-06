import React, { useEffect } from "react";
import "./Header.css";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import MainLogo from "./MainLogo";
import Fade from '@material-ui/core/Fade';
import Collapse from '@material-ui/core/Collapse';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';

import AboutDropdown from "./AboutDropdown";


function Header({ config }) {

  // sub menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //main menu
  const matches = useMediaQuery('(min-width:1200px)');
  console.log("matches", matches)
  const [menuState, setMenuState] = React.useState(false);
  
  useEffect(() => {
    if (matches) {setMenuState(true)}
  })
  
  const handleMainmenu = () => {
    setMenuState((menuState) => !menuState);
  }

  return (
    <div className="menuBar">
      <AppBar position="fixed">
        <Toolbar className="toolbar">
          <MainLogo />

          <Grow in={menuState} style={{ transformOrigin: '50% 0 0' }}>
          <div className="menu">
            <a href="/business/">
              <Typography  className="title">
                Business
              </Typography>
            </a>
            <a href="/individuals/">
              <Typography  className="title">
                Individuals
              </Typography>
            </a>
            <a href="/marketplace/">
              <Typography  className="title">
                Marketplace
              </Typography>
            </a>
            <a href="/blog/">
              <Typography  className="title">
                News
              </Typography>
            </a>

            <div className="aboutlink">
              <a href="#">
                <Typography
                  className="title"
                  aria-label="About Blockpass"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                >
                  About
                </Typography>
              </a>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 63,
                  horizontal: 'center',
                }}
                keepMounted
                getContentAnchorEl={null}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={open}
                onClose={handleClose}
                TransitionComponent={Grow}
              >
                <MenuItem onClick={handleClose} className="menuitem">
                  <AboutDropdown />
                </MenuItem>
              </Menu>
              
                <Fade in={anchorEl}>
                  <div className="arrowmenu"></div>
                </Fade>
              
            </div>
            <Button variant="outlined" color="secondary" href="#" className="signupopen">
              Get Started
            </Button>
          </div>
          </Grow>

          <IconButton
              edge="end"
              className="menubutton"
              color="inherit"
              aria-label="menu"
              onClick={handleMainmenu}
            >
              <MenuIcon />
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
