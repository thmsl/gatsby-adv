import React from "react";
import "./Header.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function AboutDropdown({ config }) {
  return (
    <Grid container className="dropdown-content">
      <Grid item md={2}>
        <a style={{ marginTop: 0 }} href="/about/" className="about-link">
          <h2 className="ptop30 " style={{ color: "#414141" }}>
            About
          </h2>
          <p
            style={{
              fontSize: "0.75em",
              paddingTop: 0,
              margin: 0,
              paddingBottom: 0,
              fontWeight: "700",
            }}
          >
            Our Company
          </p>
        </a>

        <a href="/contact/" className="about-link">
          <h2 className="ptop30 " style={{ color: "#414141" }}>
            Contact
          </h2>
          <p
            style={{
              fontSize: "0.75em",
              paddingTop: 0,
              margin: 0,
              paddingBottom: 0,
              fontWeight: "700",
            }}
          >
            Get in touch
          </p>
        </a>
      </Grid>
      <Grid item md={2}>
        <a style={{ marginTop: 0 }} href="/events/" className="about-link">
          <h2 className="ptop30 " style={{ color: "#414141" }}>
            Events
          </h2>
          <p
            style={{
              fontSize: "0.75em",
              paddingTop: 0,
              margin: 0,
              paddingBottom: 0,
              fontWeight: "700",
            }}
          >
            Come See Us
          </p>
        </a>

        <a href="/blog/" className="about-link">
          <h2 className="ptop30 " style={{ color: "#414141" }}>
            Blog
          </h2>
          <p
            style={{
              fontSize: "0.75em",
              paddingTop: 0,
              margin: 0,
              paddingBottom: 0,
              fontWeight: "700",
            }}
          >
            Latest Updates
          </p>
        </a>
      </Grid>
      <Grid item md={3}>
        <a
          style={{ marginTop: 0 }}
          href="/integrations/"
          className="about-link"
        >
          <h2 className="ptop30 " style={{ color: "#414141" }}>
            Integrations
          </h2>
          <p
            style={{
              fontSize: "0.75em",
              paddingTop: 0,
              margin: 0,
              paddingBottom: 0,
              fontWeight: "700",
            }}
          >
            Fully compliant platforms
          </p>
        </a>
      </Grid>

      <Grid item md={5}>
        <h2 className="ptop30 pbase10">Download the Blockpass app</h2>
        <a
          id="apple"
          href="https://itunes.apple.com/us/app/blockpass/id1322917010"
          target="_blank"
        >
          <img
            style={{ display: "inline", marginRight: 15 }}
            src="<?php echo site_url()?>/wp-content/themes/blockpass/images/footer_appstore.png"
          />
        </a>
        <a
          id="android"
          href="https://play.google.com/store/apps/details?id=com.blockpass_mobile"
          target="_blank"
        >
          <img
            style={{ display: "inline" }}
            src="<?php echo site_url()?>/wp-content/themes/blockpass/images/footer_playstore.png"
          />
        </a>
        <p style={{ display: "block", clear: "both", width: "100%" }}>
          The faster, safer, and easier way to manage your identity and access
          regulated industries. Take back control of your identity
        </p>
        {/* to fix: next row */}
        <p
          style={{
            fontSize: "0.75em",
            paddingTop: 0,
            margin: 0,
            paddingBottom: 0,
            fontWeight: "700",
          }}
        >
          <a href="/individuals">Read more about Blockpass for individuals</a>
        </p>
      </Grid>
    </Grid>
  );
}

export default AboutDropdown;
