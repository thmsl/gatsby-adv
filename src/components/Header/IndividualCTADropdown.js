import React from "react";
import "./Header.css";

function IndividualCTADropdown() {
  return (
    <>
      <h2 className="mb-0">Download the Blockpass app</h2>
      <a
        id="apple"
        href="https://itunes.apple.com/us/app/blockpass/id1322917010"
        target="_blank"
      >
        <img
          style={{ display: "inline", marginRight: 15, width: 160 }}
          src="/assets/footer_appstore.png"
        />
      </a>
      <a
        id="android"
        href="https://play.google.com/store/apps/details?id=com.blockpass_mobile"
        target="_blank"
      >
        <img
          style={{ display: "inline", width: 160 }}
          src="/assets/footer_playstore.png"
        />
      </a>
      <p>
        The faster, safer, and easier way to manage your identity and access
        regulated industries. Take back control of your identity
      </p>
      {/* to fix: next row */}
      <p
        style={{
          fontSize: "0.95em",
          paddingTop: 0,
          margin: 0,
          paddingBottom: 0,
          fontWeight: "700",
        }}
      >
        <a href="/individuals">Read more about Blockpass for individuals</a>
      </p>
    </>
  );
}

export default IndividualCTADropdown;
