import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import Layout from "../layout";
import { Grid, Typography } from "@material-ui/core";
import GetStarted from "../components/GetStarted/GetStarted";
import MarketplaceListing from "../components/MarketplaceListing/MarketplaceListing"
import "./marketplace.css";

const MPHeader = () => {
  return (
    <div className="mp-header">
      <div className="indivcontainer indivcontainertext">
        <Grid container>
          <Grid item xs={12} md={7}>
            <h1>
              Blockpass <br />
              Marketplace
            </h1>
            <h3 style={{ marginTop: "2vh" }}>
              One-stop hub for emerging financial services
            </h3>
            <p>
              One-click access to innovative financial services, digital asset
              custody provision, crypto crowdfunding, and other exclusive offers
              for Blockpass identity holders
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

function MarketPlace({ data }) {
  const mpEdges = data.allFile.edges;
  return (
    <Layout>
      <div className="mp-container">
        <Helmet title={`Blockpass Marketplace | ${config.siteTitle}`} />

        <MPHeader />
        <div className="blogcontainer">
          <div>
            <MarketplaceListing marketplaceEdges={mpEdges} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MarketPlace;

export const MarketplaceQuery = graphql`
query GetAllMarkeplaceTiles {
  allFile(filter: {
      internal: {
        mediaType: {eq: "text/markdown"}
      }, 
      sourceInstanceName: {eq: "marketplace"}}, 
      sort: {fields: childMarkdownRemark___frontmatter___sort, order: DESC}) {
    edges {
      node {
        childMarkdownRemark {
          frontmatter {
            title
            date
            status
            mp_type
            permalink
            type_additonal
            active
            comingsoon
            blockpass
            icon
            tagline
            tile_intro
            link_type
            link
            link_text
            sort
          }
        }
      }
    }
  }
}
`;
