import React from "react";
import MarketplaceCard from "./MarketplaceCard"
import Grid from '@material-ui/core/Grid';
import Masonry from 'react-masonry-css'
import "./Marketplace.css";


function MarketplaceListing({ marketplaceEdges }) {
  const marketplaceList = [];
  marketplaceEdges.forEach((marketplaceEdge) => {
    marketplaceList.push({ frontmatter: marketplaceEdge.node.childMarkdownRemark.frontmatter });
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
        marketplaceList.map((post, index) => (
          <div key={index}>
            <MarketplaceCard post={post} position={index}/>
          </div>
        ))
      }
    </Masonry>
  );
}

export default MarketplaceListing;
