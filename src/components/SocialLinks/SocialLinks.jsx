import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookShareCount,
  RedditShareCount,
} from "react-share";

import GitHubIcon from '@material-ui/icons/GitHub';
import RedditIcon from '@material-ui/icons/Reddit';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';

import urljoin from "url-join";
import config from "../../../data/SiteConfig";
import "./SocialLinks.css";

function SocialLinks({ postNode, postPath, mobile }) {
  const post = postNode.frontmatter;
  const url = urljoin(config.siteUrl, config.pathPrefix, postPath);
  const iconSize = mobile ? 36 : 24;
  const filter = (count) => (count > 0 ? count : "");
  const renderShareCount = (count) => (
    <div className="share-count">{filter(count)}</div>
  );

  return (
    <div className="social-links">
      <RedditShareButton url={url} title={post.title}>
        <RedditIcon size={iconSize} />
        <RedditShareCount url={url}>
          {(count) => renderShareCount(count)}
        </RedditShareCount>
      </RedditShareButton>
      <TwitterShareButton url={url} title={post.title}>
        <TwitterIcon size={iconSize} />
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={postNode.excerpt}>
        <FacebookIcon size={iconSize} />
        <FacebookShareCount url={url}>
          {(count) => renderShareCount(count)}
        </FacebookShareCount>
      </FacebookShareButton>
      <LinkedinShareButton
        url={url}
        title={post.title}
        description={postNode.excerpt}
      >
        <LinkedInIcon size={iconSize} />
      </LinkedinShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon size={iconSize} />
      </TelegramShareButton>
    </div>
  );
}

export default SocialLinks;
