import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import Layout from "../layout";
import { Grid, Typography } from "@material-ui/core";
import GetStarted from "../components/GetStarted/GetStarted";
import "./kyc.css";

function KYC() {
  return (
    <Layout>
      <div className="kyc-container">
        <Helmet title={`Business | ${config.siteTitle}`} />

        <div className="kyc-header">
          <div className="kyccontainer kyccontainertext">
            <Grid container>
              <Grid item xs={12} md={5}>
                <h1>KYC Connect</h1>
                <h3 style={{ marginTop: "2vh" }}>
                  Comprehensive KYC-as-a-Service for Regulated Industries
                </h3>
              </Grid>
            </Grid>
          </div>
        </div>

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
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                class="kyc-phone"
                src="https://blockpass.org/wp-content/themes/blockpass/images/kyc-phone.png"
                alt=""
              />
            </Grid>
          </Grid>
        </div>

        <div className="kycwhycontainer">
          <Grid container className="kyccontainer">
            <Grid xs={12}>
              <h3 className="text40">
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

        {/* hahaha */}


        <section class="grey ptop80 pbase80">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-10 col-md-offset-1 text-center">
                <h3 class="text40">
                  A comprehensive set of features make KYC Connect<sup>™</sup>{" "}
                  indispensable for seamless customer onboarding
                </h3>
              </div>
            </div>
            <div
              class="row kycicons"
              style={{marginTop: "9vh", fontSize: "0.8em", lineHeight: "1.3em"}}
            >
              <div class="col-xs-12 col-md-1 col-md-offset-1">
                <img
                  class="connect-icons fadeInUp-scroll visible"
                  src="https://blockpass.org/wp-content/themes/blockpass/images/connect-img1.svg"
                  alt=""
                />
              </div>
              <div class="col-xs-12 col-md-4 text-wrap">
                <h3 class="text40">A full service solution</h3>
                <p>
                  KYC Connect™ is Blockpass’ all-in-one flagship product - a
                  full service, comprehensive solution for all onboarding needs.
                </p>
                <div class="more-content kycmore" >
                  <p>
                    This full service solution not only verifies and
                    authenticates documents, but also checks customer identities
                    against anti-money laundering (AML) watchlists.
                  </p>
                  <ul>
                    <li>Document Authentication</li>
                    <li>Face Match</li>
                    <li>AML Check</li>
                  </ul>
                </div>
                <div class="ptop20">
                  <a class="read-more" href="#">
                    <strong>
                      <span>Read more</span>
                    </strong>
                  </a>
                </div>
              </div>
              <div class="col-xs-12 col-md-1 col-md-offset-0 Acol-md-push-8">
                <img
                  class="connect-icons fadeInUp-scroll visible"
                  src="https://blockpass.org/wp-content/themes/blockpass/images/connect-img2.svg"
                  alt=""
                />
              </div>
              <div class="col-xs-12 col-md-4 text-wrap">
                <h3 class="text40">Identity verification checks</h3>
                <p>
                  This basic identity check verifies the authenticity of the
                  customer’s identity document and validates their name and date
                  of birth.
                </p>
                <div class="more-content kycmore">
                  <p>
                    With this tool you can be sure your customers are who they
                    say they are.
                  </p>
                  <ul>
                    <li>Identity Creation</li>
                    <li>Document Authentication</li>
                    <li>Face Match</li>
                  </ul>
                </div>
                <div class="ptop20">
                  <a class="read-more" href="#">
                    <strong>
                      <span>Read more</span>
                    </strong>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="row kycicons"
              style={{marginTop: "5vh", fontSize: "0.8em", lineHeight: "1.3em"}}
            >
              <div class="col-xs-12 col-md-1 col-md-offset-1">
                <img
                  class="connect-icons fadeInUp-scroll visible"
                  src="https://blockpass.org/wp-content/themes/blockpass/images/connect-icon3.svg"
                  alt=""
                />
              </div>
              <div class="col-xs-12 col-md-4 text-wrap">
                <h3 class="text40">AML &amp; PEP screening</h3>
                <p>
                  Comply with AML regulation. KYC Connect™ includes advanced AML
                  screening, ongoing monitoring, PEP and Adverse Media
                  screening.
                </p>
                <div class="more-content kycmore">
                  <ul>
                    <li>Identity creation</li>
                    <li>Ongoing monitoring</li>
                    <li>Sanctions and PEP Lists</li>
                    <li>Adverse media screening</li>
                    <li>Select different levels of checking</li>
                  </ul>
                </div>
                <div class="ptop20">
                  <a class="read-more" href="#">
                    <strong>
                      <span>Read more</span>
                    </strong>
                  </a>
                </div>
              </div>
              <div class="col-xs-12 col-md-1 Acol-md-push-8">
                <img
                  class="connect-icons fadeInUp-scroll visible"
                  src="https://blockpass.org/wp-content/themes/blockpass/images/connect-icon4.svg"
                  alt=""
                />
              </div>
              <div class="col-xs-12 col-md-4 text-wrap">
                <h3 class="text40">Lowest cost compliance</h3>
                <p>
                  Our KYC Connect™ service provides the most affordable KYC/AML
                  screening in the compliance industry.
                </p>
                <div class="more-content kycmore">
                  <p>
                    Ensure you get the best deal in KYC/AML in Crypto, DeFi
                    &amp; regulated industries with KYC Connect™.
                  </p>
                  <ul>
                    <li>No set up cost</li>
                    <li>Pay-as-you-go</li>
                    <li>Don’t worry about volume with low per user costs</li>
                  </ul>
                </div>
                <div class="ptop20">
                  <a class="read-more" href="#">
                    <strong>
                      <span>Read more</span>
                    </strong>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="row kycicons"
              style={{marginTop: "5vh", fontSize: "0.8em", lineHeight: "1.3em"}}
            >
              <div class="col-xs-12 col-md-1 col-md-offset-1">
                <img
                  class="connect-icons fadeInUp-scroll visible"
                  src="https://blockpass.org/wp-content/themes/blockpass/images/connect-icon5.svg"
                  alt=""
                />
              </div>
              <div class="col-xs-12 col-md-4 text-wrap">
                <h3 class="text40">Identity and document matching</h3>
                <p>
                  KYC Connect™ manually confirms selfies along with submitted
                  documents to add an extra layer of certainty.
                </p>
                <div class="more-content kycmore">
                  <p>
                    Confirm that individuals completing the verification are the
                    ones in the supplied and verified identity documentation.
                    <br />
                    Add a layer of certainty to documents that are submitted,
                    are in possession of the customer with this Blockpass
                    confirmed manual check of a selfie with document.
                  </p>
                  <ul>
                    <li>Identity creation</li>
                    <li>Manual Selfie Check</li>
                  </ul>
                </div>
                <div class="ptop20">
                  <a class="read-more" href="#">
                    <strong>
                      <span>Read more</span>
                    </strong>
                  </a>
                </div>
              </div>
              <div class="col-xs-12 col-md-1">
                <img
                  class="connect-icons fadeInUp-scroll visible"
                  src="https://blockpass.org/wp-content/themes/blockpass/images/connect-icon6.svg"
                  alt=""                />
              </div>
              <div class="col-xs-12 col-md-4 text-wrap">
                <h3 class="text40">An enterprise solution</h3>
                <p>
                  A full service solution and the highest level of service with
                  24 hour support through our Certified Blockpass Professionals™
                </p>
                <div class="more-content kycmore">
                  <p>
                    A full level service solution offered at the highest level
                    of service.
                  </p>
                  <ul>
                    <li>Cloud and on-premises solutions</li>
                    <li>
                      We handle rejections, identity changes, reverifications
                    </li>
                    <li>
                      Automation, Webhook and APIs available for developers
                    </li>
                    <li>Enhanced SLA</li>
                  </ul>
                </div>
                <div class="ptop20">
                  <a class="read-more" href="#">
                    <strong>
                      <span>Read more</span>
                    </strong>
                  </a>
                </div>
              </div>
            </div>
            <div class="row" style={{marginTop: "10vh"}}>
              <div class="col-xs-12 text-center">
                <h3 class="text40">Value Added Services</h3>
              </div>
            </div>
            <div
              class="row ptop50 text-center bullet-points"
              style={{fontSize:"0.8em", lineHeight: "1.3em", marginBottom: "10vh"}}
            >
              <div class="col-xs-12 col-md-8 col-md-offset-2">
                <div class="row">
                  <div class="col-xs-12 col-md-4">
                    <p
                      class="tick fadeInUp-scroll visible"
                    >
                      <i class="fas fa-check"></i>
                    </p>
                    <p>Proof of Address checking</p>
                  </div>

                  <div class="col-xs-12 col-md-4">
                    <p
                      class="tick fadeInUp-scroll visible"
                    >
                      <i class="fas fa-check"></i>
                    </p>
                    <p>Face Match (matching faces with IDs)</p>
                  </div>
                  <div class="col-xs-12 col-md-4">
                    <p
                      class="tick fadeInUp-scroll visible"
                    >
                      <i class="fas fa-check"></i>
                    </p>
                    <p>Anti-Money Laundering (AML) check</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 col-md-4">
                    <p
                      class="tick fadeInUp-scroll visible"
                    >
                      <i class="fas fa-check"></i>
                    </p>
                    <p>Ongoing monitoring</p>
                  </div>

                  <div class="col-xs-12 col-md-4">
                    <p
                      class="tick fadeInUp-scroll visible"
                    >
                      <i class="fas fa-check"></i>
                    </p>
                    <p>Politically Exposed Persons (PEP) check</p>
                  </div>
                  <div class="col-xs-12 col-md-4">
                    <p
                      class="tick fadeInUp-scroll visible"
                    >
                      <i class="fas fa-check"></i>
                    </p>
                    <p>Sanctioned countries check</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default KYC;
