import React from "react";

function Thumbnail({ thumbnail, style }) {
  return (
      <>
        { thumbnail && 
            <img
            src={thumbnail.replace(/..\/..\/..\/..\//g, 'https://storage.googleapis.com/blockpass-website-media/wp-content/')} 
            style= {style}/>
        }
    </>
  );
}

export default Thumbnail;
