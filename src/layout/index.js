import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <Header />
        <div style={{paddingTop: 100, minHeight: 800}}>{children}</div>
      <Footer config={config} />
    </>
  );
}
