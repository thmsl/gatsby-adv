import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Container from "@material-ui/core/Container";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";

export default function PostTemplate({ data, pageContext }) {
  const { slug } = pageContext;
  console.log({data})  
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }

  const date = new Date(post.date)
  const month = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(date)
  const dateMY = `${month} ${date.getFullYear()}`

  return (
    <Layout>
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div className="anglebox">
          <div className="anglebox_bg ">
          </div>
        </div>
        <div className="postcontainer">
          <h2 className="blogtitle">Media</h2>
          <div className="category"><a href={`/categories/${post.category}/`}>{post.category}</a></div>
          <h1 className="title">{post.title}</h1>
          <div className="date">{dateMY}</div>
          <SocialLinks postPath={slug} postNode={postNode} />
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <div dangerouslySetInnerHTML={{ __html: post.intro }} style={{fontWeight:"bold"}}/>
          <br />
          <div dangerouslySetInnerHTML={{ __html: post.text ? post.text.toString().replace(/(?:\r\n|\r|\n)/g, '<br />') : ''}} />
        </div>
      </div>
    </Layout>
  );
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}, frontmatter: {language: {in: "English"}} ) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date
        category
        tag
        intro
        text
        language
      }
      fields {
        slug
        date
      }
    }
  }
`;
