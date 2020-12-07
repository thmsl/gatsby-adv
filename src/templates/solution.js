import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";

import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import SolutionDetail from "../components/SolutionDetail/SolutionDetail"
import "./b16-tomorrow-dark.css";
import "./post.css";

export default function SolutionTemplate({ data, pageContext }) {
  const { slug } = pageContext;
  //console.log({data})
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;

  return (
    <Layout>
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div className="anglebox">
          <div className="anglebox_bg "></div>
        </div>
        <h2 className="blogtitle">Industry solutions</h2>
        <SolutionDetail postNode={postNode} />
      </div>
    </Layout>
  );
}

/* eslint no-undef: "off" */
export const solutionQuery = graphql`
  query SolutionBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        mainimage  {
          childImageSharp {
            fixed(width: 960) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        intro1
        text1
        image1 {
          childImageSharp {
            fixed(width: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        text2
        image2 {
          childImageSharp {
            fixed(width: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        text3
        image3 {
          childImageSharp {
            fixed(width: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        intro2
        text4
        image4 {
          childImageSharp {
            fixed(width: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        text5
        image5 {
          childImageSharp {
            fixed(width: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        text6
        image6 {
          childImageSharp {
            fixed(width: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        outro
      }
      fields {
        slug
        date
      }
    }
  }
`;
