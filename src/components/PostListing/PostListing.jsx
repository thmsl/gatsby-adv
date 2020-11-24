import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "gatsby-theme-material-ui";

function PostListing({ postEdges }) {
  const postList = [];
  postEdges.forEach((postEdge) => {
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.fields.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
    });
  });

  return (
    <div>
      {
        /* Your post list here. */
        postList.map((post) => (
          <Link to={post.path} key={post.title}>
            <Typography>{post.title}</Typography>
          </Link>
        ))
      }
    </div>
  );
}

export default PostListing;
