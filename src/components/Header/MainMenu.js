import React, { useState } from "react";
import "./Header.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AboutDropdown from "./AboutDropdown"

function MainMenu({ config }) {

  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }


  return (
    <>
    <Grid item xs={10} sm={2} md={10} lg={9} className="desktop-nav">
      <div className="">
        <div class="menu-main-container">
          <ul
            id="menu-main"
            class="menu"
            style={{ transform: "translateY(0px)" }}
          >
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <a href="/kyc" style={{ color: "rgb(255, 255, 255)" }}>
                Business
              </a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <a href="/individuals/" style={{ color: "rgb(255, 255, 255)" }}>
                Individuals
              </a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <a href="/marketplace" style={{ color: "rgb(255, 255, 255)" }}>
                Marketplace
              </a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page">
              <a href="/blog/" style={{ color: "rgb(255, 255, 255)" }}>
                News
              </a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <a href="/about" style={{ color: "rgb(255, 255, 255)" }}>
                About
              </a>
            </li>
            <li>
            <Button variant="outlined" color="secondary" href="#" className="signupopen">
              Get Started
            </Button>
            </li>
          </ul>
        </div>
      </div>
    </Grid>
    <AboutDropdown />
    </>
  );
}

export default MainMenu;
