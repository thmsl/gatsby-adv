import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "gatsby-theme-material-ui";
import Thumbnail from "../Thumbnail/Thumbnail";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { thumbnailUrltoCDN } from "../../utils/imageOperations";
import "./Post.css";

function PostCard({ post, position }) {
  const url = thumbnailUrltoCDN(post.thumbnail);
  let size;
  position == 0 || position == 5 ? (size = "100%") : (size = "100%");
  return (
    <div>
      <Card style={{ width: size, height: size }}>
        <Link to={post.path} key={post.title}>
          <CardMedia image={url} style={{ width: size, height: 250 }} />
        </Link>
        <CardContent>
          <Typography variant="overline" component="span">
            {post.category}
          </Typography>
          <Link to={post.path} key={post.title} underline="none">
            <Typography gutterBottom variant="h6" component="h2">
              {post.title}
            </Typography>
          </Link>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            noWrap
          >
            {post.intro}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default PostCard;
