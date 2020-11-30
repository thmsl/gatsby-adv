import React from "react";
import PostCard from "./PostCard"
import Grid from '@material-ui/core/Grid';
import Masonry from 'react-masonry-css'
import "./Post.css";


function PostListing({ postEdges }) {
  const postList = [];
  postEdges.forEach((postEdge) => {
    postList.push({
      path: postEdge.node.fields.slug,
      date: postEdge.node.fields.date,
      thumbnail: postEdge.node.frontmatter.thumbnail,
      intro: postEdge.node.frontmatter.intro,
      category: postEdge.node.frontmatter.category,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
    });
  });

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };  

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {
        postList.map((post, index) => (
          <div key={index}>
            <PostCard post={post} position={index}/>
          </div>
        ))
      }
    </Masonry>
  );
}

export default PostListing;
