import React from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./Footer.css";

import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';

function Footer({ config }) {
  const url = config.siteRss;
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
  return (
    <footer style={{ zIndex: 1000 }}>
      <div className='footercontainer'>
        <Grid container  spacing={2}>
          <Grid item xs={12} sm={4}>
            <h2>Subscribe to stay notified</h2>
            <Button variant="contained" color="primary" href="#" className="subscribenewsletter">
              Subscribe
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h2>Download the app</h2>
            <a href="https://play.google.com/store/apps/details?id=com.blockpass_mobile">
              <img src="/assets/footer-google.png" />
            </a>{" "}
            <a
              href="https://itunes.apple.com/us/app/blockpass/id1322917010"
              target="_blank"
            >
              <img
                className="apple"
                src="/assets/download-apple.svg"
              />
            </a>
          </Grid>
          <Grid item xs={12} sm={4} className="footersocial">
            <h2>Connect with us</h2>
            <a target="_blank" href="https://t.me/blockpass">
            <TelegramIcon style={{ fontSize: 36 }}/>
            </a>{" "}
            <a target="_blank" href="https://twitter.com/BlockpassOrg">
            <TwitterIcon style={{ fontSize: 36 }}/>
            </a>{" "}
            <a target="_blank" href="https://www.facebook.com/blockpassorg/">
            <FacebookIcon style={{ fontSize: 36 }}/>
            </a>{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/company/blockpass"
            >
              <LinkedInIcon style={{ fontSize: 36 }}/>
            </a>{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UC4HuNuNfNTRtF4cUtqGyL2A"
            >
              <YouTubeIcon style={{ fontSize: 36 }} />
            </a>{" "}
            <a target="_blank" href="https://github.com/blockpass-org">
              <GitHubIcon style={{ fontSize: 34 }}/>
            </a>
          </Grid>
        </Grid>

        <Grid container justify="space-between" style={{marginTop : 50}}>
          <Grid item className="">
            <h2>Resources</h2>
            <ul>
              <li>
                <a target="_blank" href="https://docs.blockpass.org">
                  Documentation
                </a>
              </li>
              <li>
                <a target="_blank" href="https://help.blockpass.org/">
                  Helpdesk
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="/downloads/Blockpass_Brand_Guidelines_v1.1.pdf"
                >
                  Brand Guidelines
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item  className="">
            <h2>Corporate</h2>
            <ul>
              <li>
                <a href="/about/#team">Team</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/blog">News</a>
              </li>
              <li>
                <a className="getstartedopen">Contact Us</a>
              </li>
            </ul>
          </Grid>
          <Grid item  className="">
            <h2>Products</h2>
            <ul>
              <li>
                <a href="/kyc">KYC Connect</a>
              </li>
            </ul>
          </Grid>

          <Grid item  className="">
            <h2>Solutions</h2>
            List of all solutions
          </Grid>

          <Grid item className="">
            <h2>Legal</h2>
            <ul>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/website-terms-of-use">Website Terms of Use</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
              <li>
                <a href="/cookie-notice/">Cookie Notice</a>
              </li>
            </ul>
          </Grid>
        </Grid>

        <Grid container className="row copyright">
          <Grid item>
            <p>© Blockpass 2020. All rights reserved.</p>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
}

export default Footer;
