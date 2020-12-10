import React from "react";
import { useState } from "react";

import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import "./Marketplace.css";

function MarketplaceCard({ post, position }) {
  const frontmatter = post.frontmatter;

  const active = frontmatter.active[0] === "1" ? "" : "mp_disabled";
  const target = frontmatter.link_type[0] === "link_self" ? "_self" : "_blank";

  const displayText = (frontmatter.mp_type[0] !== "kyc" && frontmatter.mp_type[0] !== "passexchange");

  return (
    <div>
      {frontmatter.comingsoon[0] === "0" && (
        <Card className={`${"mp-" + frontmatter.mp_type[0]} ${active}`}>
          {frontmatter.active[0] === "0" &&
            <div className="mask"></div>
          }
          <CardContent>
            <Typography variant="overline" component="span">
              {frontmatter.mp_type[0]}
            </Typography>
            {frontmatter.icon[0] !== "" && (
              <a href={frontmatter.link} target={target}>
                <CardMedia
                  image={frontmatter.icon[0]}
                  style={{
                    width: "80%",
                    height: 180,
                    backgroundSize: "contain",
                    margin: "auto",
                    marginBottom: 40,
                  }}
                />
              </a>
            )}
            {displayText  && (
              <>
                <Typography gutterBottom variant="h4">
                  {frontmatter.title}
                </Typography>
                <Typography gutterBottom variant="h6">
                  {frontmatter.tagline}
                </Typography>
                <Typography gutterBottom>{frontmatter.tile_intro}</Typography>
              </>
            )}

            {(frontmatter.link && displayText) && (
              <Button
                variant="outlined"
                target={target}
                href={frontmatter.link}
                color={
                  frontmatter.mp_type[0] !== "blockpass"
                    ? "primary"
                    : "secondary"
                }
                style={{
                  margin: "auto",
                  marginTop: 20,
                }}
              >
                {frontmatter.link_text}
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default MarketplaceCard;
