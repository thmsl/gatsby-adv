import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import Layout from "../layout";
import { Grid, Typography } from "@material-ui/core";
import GetStarted from "../components/GetStarted/GetStarted";
import "./individuals.css";

const KYCHeader = () => {
  return (
    <div className="indiv-header">
      <div className="indivcontainer indivcontainertext">
        <Grid container>
          <Grid item xs={12} md={5}>
            <h1>Blockpass for Individuals</h1>
            <h3 style={{ marginTop: "2vh" }}>
              The faster, safer and easier way to manage your identity and gain
              one-click access to regulated industries.
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
      className="indivcontainer indivintrocontainer"
      style={{ paddingBottom: "5vh" }}
    >
      <Grid container>
        <Grid item xs={12} md={7}>
          <p>
            Eliminate the stress of proving your identity all over again. Access
            your profile anywhere and any time, on the web or on mobile. And
            share your verified credentials with any Blockpass enabled financial
            service in seconds.
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
          <img className="indiv-phone" src="/assets/kyc-phone.png" alt="" />
        </Grid>
      </Grid>
    </div>
  );
};

const KYCWhy = () => {
  return (
    <div className="indivwhycontainer">
      <Grid container className="indivcontainer">
        <Grid item xs={12}>
          <h3 className="text28">Why a Blockpass Identity?</h3>
        </Grid>
        <Grid item xs={12} md={3}>
          <img
            className="connect-icon fadeInUp-scroll visible"
            src="/assets/customer_onboard_2.svg"
            alt=""
          />
          <p className="text30">
            <b>Free</b>
          </p>
        </Grid>
        <Grid item xs={12} md={3}>
          <img
            className="connect-icon fadeInUp-scroll visible"
            src="/assets/kyc_1.svg"
            alt=""
          />
          <p className="text30">
            <b>Speedy</b>
          </p>
        </Grid>
        <Grid item xs={12} md={3}>
          <img
            className="connect-icon fadeInUp-scroll visible"
            src="/assets/club_white_1.svg"
            alt=""
          />
          <p className="text30">
            <b>Reusable</b>
          </p>
        </Grid>
        <Grid item xs={12} md={3}>
          <img
            className="connect-icon fadeInUp-scroll visible"
            src="/assets/kyc_5.svg"
            alt=""
          />
          <p className="text30">
            <b>Perks</b>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

const KYCFeature = () => {
  return (
    <div className="indivfeaturecontainer">
      <div className="indivcontainer">
        <Grid container justify="center">
          <Grid item xs={8} className="text-center">
            <h3 className="text40">
              Revolutionary identity management solution 
            </h3>
          </Grid>
        </Grid>

        <Grid
          container
          className="indivicons"
          style={{ fontSize: "0.8em", lineHeight: "1.3em" }}
        >
          <Grid item xs={12} md={2}>
            <img
              className="connect-icons fadeInUp-scroll visible"
              src="/assets/customer_onboard_2_blue.svg"
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <h3 className="text28">Create an account for free</h3>
            <p>Blockpass mobile app and Web Identity app are free to use.</p>
            <p>
              Download the mobile app for{" "}
              <a
                href="https://itunes.apple.com/us/app/blockpass/id1322917010"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                iOS
              </a>{" "}
              and{" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.blockpass_mobile"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Android.
              </a>{" "}
              Or connect our{" "}
              <a
                href="https://identity.blockpass.org"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Web Identity App
              </a>
            </p>
          </Grid>
          <Grid item xs={12} md={2}>
            <img
              className="connect-icons fadeInUp-scroll visible"
              src="/assets/kyc_1_blue.svg"
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <h3 className="text28">
              Speedy, Convenient Gateway to New Finance
            </h3>
            <p>
              Blockpass provides the most expedient gateway to regulated,
              innovative financial services without the need to do complete
              repetitive KYC & AML requirements
            </p>
          </Grid>
        </Grid>

        <Grid
          container
          className="indivicons"
          style={{ marginTop: "5vh", fontSize: "0.8em", lineHeight: "1.3em" }}
        >
          <Grid item xs={12} md={2}>
            <img
              className="connect-icons fadeInUp-scroll visible"
              src="/assets/club_blue_1.svg"
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <h3 className="text28">Blockpass Marketplace</h3>
            <p>
              One-click access to innovative financial services, digital asset
              custody providers, crypto crowdfunding, and other exclusive offers
              for Blockpass identity holders. {" "}
              <a
                href="/marketplace"
              >
              Access services now
              </a>
            </p>
          </Grid>
          <Grid item xs={12} md={2}>
            <img
              className="connect-icons fadeInUp-scroll visible"
              src="/assets/kyc_5_blue.svg"
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <h3 className="text28">Join PASS Club</h3>
            <p>
              Become a member of the Blockpass community. Join PASS Club and
              earn PASS Rewards every time you sign up for a new service.{" "} 
              <a
                href="/passclub"
              >
              Learn more
              </a>
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

// const KYCBanner = () => {
//   return (
//     <div className="indiv-banner">
//       <div className="indivcontainer">
//         <Grid container>
//           <Grid item xs={12}>
//             <div className="diamond"></div>
//           </Grid>
//         </Grid>
//       </div>
//     </div>
//   );
// };

// const KYCGetStarted = () => {
//   return (
//     <div className="indivcontainer">
//       <Grid container justify="center">
//         <Grid item xs={12} md={8} className="indiv-now text-center">
//           <p>
//             Start using KYC Connect™ today by registering with our console.
//             We’ve done all the hard work for you and it’s super easy to get
//             started, try it today!
//           </p>
//           <GetStarted
//             variant="contained"
//             color="primary"
//             href="#"
//             size="large"
//             className="signupopen"
//           />
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// const KYCGo = () => {
//   return (
//     <div className="indivcontainer indiv-go ">
//       <Grid container>
//         <Grid item xs={12} className="text-center text28">
//           <h2>Signing up to Blockpass is quick and easy</h2>
//         </Grid>
//       </Grid>

//       <Grid container>
//         <Grid item xs={12} md={6}>
//           <Grid container>
//             <Grid item xs={12} md={2}>
//               <img
//                 src="https://blockpass.org/wp-content/themes/blockpass/images/go-robot.svg"
//                 alt=""
//               />
//             </Grid>
//             <Grid item xs={12} md={10}>
//               <h3>Fully automated</h3>
//               <p>
//                 The entire process of signing up to KYC ConnectTM is now fully
//                 automated, from beginning to the end.
//               </p>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Grid container>
//             <Grid item xs={12} md={2}>
//               <img
//                 src="https://blockpass.org/wp-content/themes/blockpass/images/go-forward.svg"
//                 alt=""
//               />
//             </Grid>
//             <Grid item xs={12} md={10}>
//               <h3>Quick and simple process</h3>
//               <p>
//                 Fast track your way to a professional KYC solution. We’ve
//                 streamlined the process to get you up and running faster.
//               </p>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//       <Grid container>
//         <Grid item xs={12} md={6}>
//           <Grid container>
//             <Grid item xs={12} md={2}>
//               <img
//                 src="https://blockpass.org/wp-content/themes/blockpass/images/go-laptop.svg"
//                 alt=""
//               />
//             </Grid>
//             <Grid item xs={12} md={10}>
//               <h3>Easy access to information</h3>
//               <p>
//                 Online signups allow you to access all information, legal and
//                 technical documents from our portal.
//               </p>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Grid container>
//             <Grid item xs={12} md={2}>
//               <img
//                 src="https://blockpass.org/wp-content/themes/blockpass/images/go-arrows.svg"
//                 alt=""
//               />
//             </Grid>
//             <Grid item xs={12} md={10}>
//               <h3>Easy to integrate</h3>
//               <p>
//                 Blockpass KYC ConnectTM service, you simply plug a solution into
//                 an already existing infrastructure and get going.
//               </p>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//       <Grid container>
//         <Grid item xs={12} className="text-center">
//           <GetStarted
//             variant="contained"
//             color="primary"
//             className="signupopen"
//             size="large"
//           />
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// const KYCPowerful = () => {
//   return (
//     <div className="powerfulcontainer">
//       <Grid container className="indivcontainer" justify="center">
//         <Grid item xs={12} className="text-center">
//           <h2>A powerful and flexible out-of-the-box tool for onboarding</h2>
//         </Grid>
//         <Grid item xs={12} md={10} className="text-center">
//           <p>
//             Seamless onboarding of your customers using the Blockpass secure
//             eKYC system. Blockpass users create a pre-verified identity before
//             signing up for your service, meaning that documentation delivery and
//             verification is streamlined. The Blockpass ecosystem has an existing
//             pool of pre-verified users interested in new fintech opportunities
//             and services.
//           </p>
//           <GetStarted
//             variant="outlined"
//             color="secondary"
//             href="#"
//             size="large"
//             className="signupopen"
//           />
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// const KYCVideo = () => {
//   // Video is quite old. Will do later
//   return (
//     <div class="videocontainer">
//       <Grid container justify="center" className="indivcontainer">
//         <Grid item xs={12} md={8} className="text-center">
//           <h2 class="textcenter">
//             Discover how KYC Connect™ is transforming personal identity
//           </h2>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

function KYC() {
  return (
    <Layout>
      <div className="indiv-container">
        <Helmet title={`Blockpass for Individuals | ${config.siteTitle}`} />

        <KYCHeader />
        <KYCIntro />
        <KYCWhy />
        <KYCFeature />
      </div>
    </Layout>
  );
}

export default KYC;
