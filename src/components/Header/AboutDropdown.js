import React from "react";
import "./Header.css";
import Grid from "@material-ui/core/Grid";
import IndividualCTADropdown from "./IndividualCTADropdown";

function AboutDropdown({ config }) {
  return (
    <Grid container className="dropdown-content">
      <Grid item md={2} sm={6} xs={12} xs={12}>
        <a style={{ marginTop: 0 }} href="/about/">
          <h2 className="mb-0 ">About</h2>
          <p
            style={{
              fontSize: "0.95em",
              paddingTop: 0,
              margin: 0,
              paddingBottom: 0,
              fontWeight: "700",
            }}
          >
            Our Company
          </p>
        </a>

        <a href="/contact/">
          <h2 className="mb-0 ">Contact</h2>
          <p
            style={{
              fontSize: "0.95em",
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
      <Grid item md={2} sm={6} xs={12}>
        <a style={{ marginTop: 0 }} href="/events/">
          <h2 className="mb-0 ">Events</h2>
          <p
            style={{
              fontSize: "0.95em",
              paddingTop: 0,
              margin: 0,
              paddingBottom: 0,
              fontWeight: "700",
            }}
          >
            Come See Us
          </p>
        </a>

        <a href="/blog/">
          <h2 className="mb-0 ">Blog</h2>
          <p
            style={{
              fontSize: "0.95em",
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
        <a style={{ marginTop: 0 }} href="/integrations/">
          <h2 className="mb-0 ">Integrations</h2>
          <p
            style={{
              fontSize: "0.95em",
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
        <IndividualCTADropdown />
      </Grid>
    </Grid>
  );
}

export default AboutDropdown;
