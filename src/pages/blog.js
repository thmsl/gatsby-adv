import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import Layout from "../layout";
import { graphql, Link, navigate } from "gatsby";


import PostListing from "../components/PostListing/PostListing";
import "./blog.css";

function Blog({ data }) {
  const postEdges = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`Blog | ${config.siteTitle}`} />
        <div className="anglebox">
          <div className="anglebox_bg "></div>
        </div>
        <div className="blogcontainer">
          <div>
            <h2 className="blogtitle">Blog</h2>
            <PostListing postEdges={postEdges} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Blog;

export const pagesQuery = graphql`
  query BlogListing {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            category
            date
            thumbnail
            intro
          }
        }
      }
    }
  }
`;
