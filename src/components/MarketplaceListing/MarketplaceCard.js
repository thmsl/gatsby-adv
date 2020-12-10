import React from "react";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import "./Marketplace.css";

function MarketplaceCard({ post, position }) {
  const frontmatter = post.frontmatter;
  console.log({ frontmatter });

  const active = frontmatter.active[0] === "1" ? "" : "mp_disabled";

  let classTile = "";

  switch (frontmatter.mp_type) {
    case "kyc": {
      classTile = { className: "mp-kyc" };
    }
    case "passexchange": {
      classTile = { className: "mp-passexchange" };
    }
    case "blockpass": {
      classTile = { className: "mp-blockpass" };
    }
    default: {
      classTile = { className: "mp-offer" };
    }
  }

  return (
    <div>
      {frontmatter.comingsoon[0] === "0" && (
        <Card className={`${classTile.className} ${active}`}>
          <CardContent>
            <Typography variant="overline" component="span">
              {frontmatter.mp_type}
            </Typography>
            {frontmatter.icon[0] !== "" && (
              <CardMedia
                image={frontmatter.icon[0]}
                style={{
                  width: "80%",
                  height: 180,
                  backgroundSize: "contain",
                  margin: "auto",
                  marginBottom: 40
                }}
              />
            )}
            <Typography variant="h4">{frontmatter.title}</Typography>
            <Typography variant="h6">{frontmatter.tagline}</Typography>
            <Typography>{frontmatter.tile_intro}</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default MarketplaceCard;
