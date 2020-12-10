import React, { useEffect } from "react";
import "./Header.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MainLogo from "./MainLogo";
import Fade from "@material-ui/core/Fade";
import Grow from "@material-ui/core/Grow";
import GetStarted from '../GetStarted/GetStarted'
import { Link } from "gatsby"

import AboutDropdown from "./AboutDropdown";
import SolutionDropdown from "./SolutionDropdown";

function Header({ config }) {
  // sub menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const menuTarget = anchorEl ? anchorEl.id : null;

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //main menu
  const matches = useMediaQuery("(min-width:1200px)");
  const [menuState, setMenuState] = React.useState(false);

  useEffect(() => {
    if (matches) {
      setMenuState(true);
    }
  });

  const handleMainmenu = () => {
    setMenuState((menuState) => !menuState);
  };

  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: "active" } : {}
  }

  const isPartiallyActive = ({
    isPartiallyCurrent
  }) => {
    return isPartiallyCurrent
      ? { className: "active" }
      : {}
  }

  return (
    <div className="menuBar">
      <AppBar position="fixed">
        <Toolbar className="toolbar">
          <MainLogo />
          <Grow in={menuState} style={{ transformOrigin: "50% 0 0" }}>
            <div className="menu">
              <Link getProps={isActive} to="/kyc/">
                <Typography className="title">Business</Typography>
              </Link>
              <Link getProps={isActive} to="/individuals/">
                <Typography className="title">Individuals</Typography>
              </Link>
              <Link getProps={isActive} to="/marketplace/">
                <Typography className="title">Marketplace</Typography>
              </Link>
              <div className="submenulink">
              <Link getProps={isPartiallyActive} to="about#">
                  <Typography
                    className="title"
                    aria-label="Industry solutions"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    id="menu-solution"
                    onClick={handleMenu}
                  >
                    Solutions
                  </Typography>
                </Link>
                <Fade in={menuTarget === "menu-solution"}>
                  <div className="arrowmenu"></div>
                </Fade>
              </div>

              <div className="submenulink">
                <a href="#">
                  <Typography
                    className="title"
                    aria-label="About Blockpass"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    id="menu-about"
                    onClick={handleMenu}
                  >
                    About
                  </Typography>
                </a>
                <Fade in={menuTarget === "menu-about"}>
                  <div className="arrowmenu"></div>
                </Fade>
              </div>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 62,
                  horizontal: "center",
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
                  {menuTarget === "menu-solution" && <SolutionDropdown />}
                  {menuTarget === "menu-about" && <AboutDropdown />}
                </MenuItem>
              </Menu>
              <GetStarted
                variant="outlined"
                color="secondary"
                className="signupopen"
              />
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
