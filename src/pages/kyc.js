import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import Layout from "../layout";
import { Grid, Typography } from "@material-ui/core";
import GetStarted from "../components/GetStarted/GetStarted";
import CheckIcon from "@material-ui/icons/Check";
import "./kyc.css";

import KYCDashboardCarousel from "../components/KYC/KYCDashboardCarousel";

const KYCHeader = () => {
  return (
    <div className="kyc-header">
      <div className="kyccontainer kyccontainertext">
        <Grid container>
          <Grid item xs={12} md={5}>
            <h1>KYC Connect Business</h1>
            <h3 style={{ marginTop: "2vh" }}>
              Comprehensive KYC-as-a-Service for Regulated Industries
            </h3>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const KYCIntro = () => {
  return (
    <div
      className="kyccontainer kycintrocontainer"
      style={{ paddingBottom: "5vh" }}
    >
      <Grid container>
        <Grid item xs={12} md={7}>
          <p>
            Seamless and affordable onboarding of your customers using the
            Blockpass secure eKYC system. Blockpass users create a reusable
            identity before signing up for your service, meaning that
            documentation delivery and verification is streamlined.
          </p>
          <p></p>
          <GetStarted
            variant="contained"
            color="primary"
            href="#"
            className="signupopen"
            size="large"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <img
            className="kyc-phone"
            src="/assets/blockpass-kyc-dashboard.png"
            alt=""
          />
        </Grid>
      </Grid>
    </div>
  );
};

const KYCWhy = () => {
  return (
    <div className="kycwhycontainer">
      <Grid container className="kyccontainer">
        <Grid item xs={12}>
          <h3 className="text28">
            Why Choose KYC Connect<sup>™</sup>
          </h3>
        </Grid>
        <Grid item xs={12} md={3}>
          <img
            className="connect-icon fadeInUp-scroll visible"
            src="https://blockpass.org/wp-content/themes/blockpass/images/start-now.svg"
            alt=""
          />
          <p className="text30">
            <b>Start Immediately</b>
          </p>
        </Grid>
        <Grid item xs={12} md={3}>
          <img
            className="connect-icon fadeInUp-scroll visible"
            src="https://blockpass.org/wp-content/themes/blockpass/images/free-testing.svg"
            alt=""
          />
          <p className="text30">
            <b>Free Testing</b>
          </p>
        </Grid>
        <Grid item xs={12} md={3}>
          <img
            className="connect-icon fadeInUp-scroll visible"
            src="https://blockpass.org/wp-content/themes/blockpass/images/connected-icon2.svg"
            alt=""
          />
          <p className="text30">
            <b>Pay-as-You-Go</b>
          </p>
        </Grid>
        <Grid item xs={12} md={3}>
          <img
            className="connect-icon fadeInUp-scroll visible"
            src="https://blockpass.org/wp-content/themes/blockpass/images/connected-icon3.svg"
            alt=""
          />
          <p className="text30">
            <b>No Setup Cost</b>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

const KYCFeature = () => {
  return (
    <div className="kycfeaturecontainer">
      <div className="kyccontainer">
        <Grid container justify="center">
          <Grid item xs={8} className="text-center">
            <h3 className="text40">
              A comprehensive set of features make KYC Connect<sup>™</sup>{" "}
              indispensable for seamless customer onboarding
            </h3>
          </Grid>
        </Grid>

        <Grid
          container
          className="kycicons"
          style={{ fontSize: "0.8em", lineHeight: "1.3em" }}
        >
          <Grid item xs={12} md={2}>
            <img
              className="connect-icons fadeInUp-scroll visible"
              src="https://blockpass.org/wp-content/themes/blockpass/images/connect-img1.svg"
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <h3 className="text28">A full service solution</h3>
            <p>
              KYC Connect™ is Blockpass’ all-in-one flagship product - a full
              service, comprehensive solution for all onboarding needs.
            </p>
            <div className="more-content kycmore">
              <p>
                This full service solution not only verifies and authenticates
                documents, but also checks customer identities against
                anti-money laundering (AML) watchlists.
              </p>
              <div className="kycfeaturelist">
                <p>
                  <CheckIcon color="primary" />
                  Document Authentication
                </p>
                <p>
                  <CheckIcon color="primary" />
                  Face Match
                </p>
                <p>
                  <CheckIcon color="primary" />
                  AML Check
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={2}>
            <img
              className="connect-icons fadeInUp-scroll visible"
              src="https://blockpass.org/wp-content/themes/blockpass/images/connect-img2.svg"
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <h3 className="text28">Identity verification checks</h3>
            <p>
              This basic identity check verifies the authenticity of the
              customer’s identity document and validates their name and date of
              birth.
            </p>
            <div className="more-content kycmore">
              <p>
                With this tool you can be sure your customers are who they say
                they are.
              </p>
              <div className="kycfeaturelist">
                <p>
                  <CheckIcon color="primary" /> Identity Creation
                </p>
                <p>
                  <CheckIcon color="primary" />
                  Document Authentication
                </p>
                <p>
                  <CheckIcon color="primary" />
                  Face Match
                </p>
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid
          container
          className="kycicons"
          style={{ marginTop: "5vh", fontSize: "0.8em", lineHeight: "1.3em" }}
        >
          <Grid item xs={12} md={2}>
            <img
              className="connect-icons fadeInUp-scroll visible"
              src="https://blockpass.org/wp-content/themes/blockpass/images/connect-icon3.svg"
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <h3 className="text28">AML &amp; PEP screening</h3>
            <p>
              Comply with AML regulation. KYC Connect™ includes advanced AML
              screening, ongoing monitoring, PEP and Adverse Media screening.
            </p>
            <div className="more-content kycmore">
              <div className="kycfeaturelist">
                <p>
                  <CheckIcon color="primary" />
                  Identity creation
                </p>
                <p>
                  <CheckIcon color="primary" />
                  Ongoing monitoring
                </p>
                <p>
                  <CheckIcon color="primary" />
                  Sanctions and PEP Lists
                </p>
                <p>
                  <CheckIcon color="primary" />
                  Adverse media screening
                </p>
                <p>
                  <CheckIcon color="primary" />
                  Select different levels of checking
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={2}>
            <img
              className="connect-icons fadeInUp-scroll visible"
              src="https://blockpass.org/wp-content/themes/blockpass/images/connect-icon4.svg"
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <h3 className="text28">Lowest cost compliance</h3>
            <p>
              Our KYC Connect™ service provides the most affordable KYC/AML
              screening in the compliance industry.
            </p>
            <div className="more-content kycmore">
              <p>
                Ensure you get the best deal in KYC/AML in Crypto, DeFi &amp;
                regulated industries with KYC Connect™.
              </p>
              <div className="kycfeaturelist">
                <p>
                  <CheckIcon color="primary" />
                  No set up cost
                </p>
                <p>
                  <CheckIcon color="primary" />
                  Pay-as-you-go
                </p>
                <p>
                  <CheckIcon color="primary" />
                  Don’t worry about volume with low per user costs
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          className="kycicons"
          style={{ marginTop: "5vh", fontSize: "0.8em", lineHeight: "1.3em" }}
        >
          <Grid item xs={12} md={2}>
            <img
              className="connect-icons fadeInUp-scroll visible"
              src="https://blockpass.org/wp-content/themes/blockpass/images/connect-icon5.svg"
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <h3 className="text28">Identity and document matching</h3>
            <p>
              KYC Connect™ manually confirms selfies along with submitted
              documents to add an extra layer of certainty.
            </p>
            <div className="more-content kycmore">
              <p>
                Confirm that individuals completing the verification are the
                ones in the supplied and verified identity documentation.
                <br />
                Add a layer of certainty to documents that are submitted, are in
                possession of the customer with this Blockpass confirmed manual
                check of a selfie with document.
              </p>
              <div className="kycfeaturelist">
                <p>
                  <CheckIcon color="primary" />
                  Identity creation
                </p>
                <p>
                  <CheckIcon color="primary" />
                  Manual Selfie Check
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={2}>
            <img
              className="connect-icons fadeInUp-scroll visible"
              src="https://blockpass.org/wp-content/themes/blockpass/images/connect-icon6.svg"
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <h3 className="text28">An enterprise solution</h3>
            <p>
              A full service solution and the highest level of service with 24
              hour support through our Certified Blockpass Professionals™
            </p>
            <div className="more-content kycmore">
              <p>
                A full level service solution offered at the highest level of
                service.
              </p>
              <div className="kycfeaturelist">
                <p>
                  <CheckIcon color="primary" />
                  Cloud and on-premises solutions
                </p>
                <p>
                  <CheckIcon color="primary" />
                  We handle rejections, identity changes, reverifications
                </p>
                <p>
                  <CheckIcon color="primary" />
                  Automation, Webhook and APIs available for developers
                </p>
                <p>
                  <CheckIcon color="primary" />
                  Enhanced SLA
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: "10vh" }}>
          <Grid item xs={12} className="text-center">
            <h3 className="text28">Value Added Services</h3>
          </Grid>
        </Grid>

        <Grid
          container
          justify="center"
          className="text-center bullet-points"
          style={{
            fontSize: "0.8em",
            lineHeight: "1.3em",
            marginBottom: "10vh",
          }}
        >
          <Grid item xs={12} md={8}>
            <Grid container>
              <Grid item xs={12} md={4}>
                <CheckIcon fontSize="large" color="primary" />
                <p>Proof of Address checking</p>
              </Grid>

              <Grid item xs={12} md={4}>
                <CheckIcon fontSize="large" color="primary" />
                <p>Face Match (matching faces with IDs)</p>
              </Grid>
              <Grid item xs={12} md={4}>
                <CheckIcon fontSize="large" color="primary" />
                <p>Anti-Money Laundering (AML) check</p>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} md={4}>
                <CheckIcon fontSize="large" color="primary" />
                <p>Ongoing monitoring</p>
              </Grid>
              <Grid item xs={12} md={4}>
                <CheckIcon fontSize="large" color="primary" />
                <p>Politically Exposed Persons (PEP) check</p>
              </Grid>
              <Grid item xs={12} md={4}>
                <CheckIcon fontSize="large" color="primary" />
                <p>Sanctioned countries check</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const KYCBanner = () => {
  return (
    <div className="kyc-banner">
      <div className="kyccontainer">
        <Grid container>
          <Grid item xs={12}>
            <div className="diamond"></div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const KYCGetStarted = () => {
  return (
    <div className="kyccontainer">
      <Grid container justify="center">
        <Grid item xs={12} md={8} className="kyc-now text-center">
          <p>
            Start using KYC Connect™ today by registering with our console.
            We’ve done all the hard work for you and it’s super easy to get
            started, try it today!
          </p>
          <GetStarted
            variant="contained"
            color="primary"
            href="#"
            size="large"
            className="signupopen"
          />
        </Grid>
      </Grid>
    </div>
  );
};

const KYCGo = () => {
  return (
    <div className="kyccontainer kyc-go ">
      <Grid container>
        <Grid item xs={12} className="text-center text28">
          <h2>Signing up to Blockpass is quick and easy</h2>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={6}>
          <Grid container>
            <Grid item xs={12} md={2}>
              <img
                src="https://blockpass.org/wp-content/themes/blockpass/images/go-robot.svg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} md={10}>
              <h3>Fully automated</h3>
              <p>
                The entire process of signing up to KYC ConnectTM is now fully
                automated, from beginning to the end.
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container>
            <Grid item xs={12} md={2}>
              <img
                src="https://blockpass.org/wp-content/themes/blockpass/images/go-forward.svg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} md={10}>
              <h3>Quick and simple process</h3>
              <p>
                Fast track your way to a professional KYC solution. We’ve
                streamlined the process to get you up and running faster.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Grid container>
            <Grid item xs={12} md={2}>
              <img
                src="https://blockpass.org/wp-content/themes/blockpass/images/go-laptop.svg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} md={10}>
              <h3>Easy access to information</h3>
              <p>
                Online signups allow you to access all information, legal and
                technical documents from our portal.
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container>
            <Grid item xs={12} md={2}>
              <img
                src="https://blockpass.org/wp-content/themes/blockpass/images/go-arrows.svg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} md={10}>
              <h3>Easy to integrate</h3>
              <p>
                Blockpass KYC ConnectTM service, you simply plug a solution into
                an already existing infrastructure and get going.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} className="text-center">
          <GetStarted
            variant="contained"
            color="primary"
            className="signupopen"
            size="large"
          />
        </Grid>
      </Grid>
    </div>
  );
};

const KYCPowerful = () => {
  return (
    <div className="powerfulcontainer">
      <Grid container className="kyccontainer" justify="center">
        <Grid item xs={12} className="text-center">
          <h2>A powerful and flexible out-of-the-box tool for onboarding</h2>
        </Grid>
        <Grid item xs={12} md={10} className="text-center">
          <p>
            Seamless onboarding of your customers using the Blockpass secure
            eKYC system. Blockpass users create a pre-verified identity before
            signing up for your service, meaning that documentation delivery and
            verification is streamlined. The Blockpass ecosystem has an existing
            pool of pre-verified users interested in new fintech opportunities
            and services.
          </p>
          <GetStarted
            variant="outlined"
            color="secondary"
            href="#"
            size="large"
            className="signupopen"
          />
        </Grid>
      </Grid>
    </div>
  );
};

const KYCVideo = () => {

  // Video is quite old. Will do later
  return (
    <div class="videocontainer">
    <Grid container justify="center" className="kyccontainer">
      <Grid item xs={12} md={8} className="text-center">
        <h2 class="textcenter">
          Discover how KYC Connect™ is transforming personal identity
        </h2>
      </Grid>
    </Grid>
    </div>
  );
};

function KYC() {
  return (
    <Layout>
      <div className="kyc-container">
        <Helmet title={`Business | ${config.siteTitle}`} />

        <KYCHeader />
        <KYCIntro />
        <KYCWhy />
        <KYCFeature />
        <KYCBanner />
        <KYCGetStarted />
        <KYCGo />
        <KYCDashboardCarousel />
        <KYCPowerful />
      </div>
    </Layout>
  );
}

export default KYC;
