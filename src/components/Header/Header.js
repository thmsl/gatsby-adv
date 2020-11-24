import React from "react";
import { Link } from "gatsby";
import "./Header.css";
import Grid from '@material-ui/core/Grid';
import MainLogo from "./MainLogo"
import MainMenu from "./MainMenu"

function Header({ config }) {
  return (
    <div className="menuBar">
      <Grid container style={{maxWidth:1170, margin: 'auto'}}>
        <MainLogo />
        <MainMenu />
      </Grid>
    </div>
  );
}

export default Header;
