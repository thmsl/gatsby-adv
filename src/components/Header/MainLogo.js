import React from "react";
import "./Header.css";
import Grid from "@material-ui/core/Grid";

function MainLogo({ config }) {
  return (
    <Grid item xs={12} sm={2} md={2} lg={3} style={{ zIndex: 10 }}>
      <div className="outerframe">
        <div className="logoframe">
          <a href="/">
            <div className="el multiple-targets-01"></div>
            <div className="el multiple-targets-02"></div>
            <div className="el multiple-targets-03"></div>
            <div className="el multiple-targets-04"></div>
            <div className="el multiple-targets-05"></div>
            <div className="el multiple-targets-06"></div>
            <div className="el multiple-targets-07">
              <img src="/assets/blockpass_header.svg" className="under" />
              <img src="/assets/blockpass_header_blue.svg" className="over" />
            </div>
          </a>
        </div>
      </div>
    </Grid>
  );
}

export default MainLogo;
