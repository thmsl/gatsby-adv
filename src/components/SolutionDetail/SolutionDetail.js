import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Img from "gatsby-image";
import SocialLinks from "../SocialLinks/SocialLinks";
import MDContent from "../MDContent/MDContent";
import "./SolutionDetail.css";

function SolutionDetail({ postNode }) {
  const post = postNode.frontmatter;

  return (
    <div className="postcontainer solutioncontainer">
      <div className="solutiontitlecontainer">
        {post.mainimage && <Img fixed={post.mainimage.childImageSharp.fixed} />}
        <h1 className="solutiontitle">{post.title}</h1>
      </div>

      {/* <SocialLinks postPath={post.slug} postNode={postNode} /> */}

      <Grid container spacing={4}>
        <Grid item sm={12}>
          <Typography component="div">
            <MDContent content={post.intro1} />
          </Typography>
        </Grid>

        {post.text1 && (
          <Grid item sm={6}>
            <Typography component="div">
              <MDContent content={post.text1} />
            </Typography>
          </Grid>
        )}

        {post.image1 && (
          <Grid item sm={6} className="solutionimagecontainer">
            <Img fixed={post.image1.childImageSharp.fixed} />
          </Grid>
        )}

        {post.image2 && (
          <Grid item sm={6} className="solutionimagecontainer">
            <Img fixed={post.image2.childImageSharp.fixed} />
          </Grid>
        )}
        {post.text2 && (
          <Grid item sm={6}>
            <Typography component="div">
              <MDContent content={post.text2} />
            </Typography>
          </Grid>
        )}

        {post.text3 && (
          <Grid item sm={6}>
            <Typography component="div">
              <MDContent content={post.text3} />
            </Typography>
          </Grid>
        )}

        {post.image3 && (
          <Grid item sm={6} className="solutionimagecontainer">
            <Img fixed={post.image3.childImageSharp.fixed} />
          </Grid>
        )}
        {post.intro2 && (
          <Grid item sm={12} className="solutionsubintro">
            <Typography component="div">
              <MDContent content={post.intro2} />
            </Typography>
          </Grid>
        )}

        {post.image4 && (
          <Grid item sm={6} className="solutionimagecontainer">
            <Img fixed={post.image4.childImageSharp.fixed} />
          </Grid>
        )}

        {post.text4 && (
          <Grid item sm={6}>
            <Typography component="div">
              <MDContent content={post.text4} />
            </Typography>
          </Grid>
        )}

        {post.text5 && (
          <Grid item sm={6}>
            <Typography component="div">
              <MDContent content={post.text5} />
            </Typography>
          </Grid>
        )}

        {post.image5 && (
          <Grid item sm={6} className="solutionimagecontainer">
            <Img fixed={post.image5.childImageSharp.fixed} />\
          </Grid>
        )}

        {post.image6 && (
          <Grid item sm={6} className="solutionimagecontainer">
            <Img fixed={post.image6.childImageSharp.fixed} />
          </Grid>
        )}
        
        {post.text6 && (
          <Grid item sm={6}>
            <Typography component="div">
              <MDContent content={post.text6} />
            </Typography>
          </Grid>
        )}

        {post.outro && (
          <Grid item sm={12} className="solutionoutro">
            <Typography component="div">
              <MDContent content={post.outro} />
            </Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default SolutionDetail;
