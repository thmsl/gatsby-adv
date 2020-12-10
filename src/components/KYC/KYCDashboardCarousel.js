import React from "react";
import { useState } from "react";

import { Grid, Typography } from "@material-ui/core";

import "./KYCDashboardCarousel.css";
import "./slick.min.css";

import Slider from 'react-slick';




const KYCDashboardCarousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    accessibility: false
  };

  return (
    <div className="kyccarouselcontainer">
      <Grid container justify="center" className="kyccontainer">
        <Grid item xs={12} md={8} className="text-center">
          <h2>KYC Connect™ Dashboard</h2>
          <Slider {...settings}
            className="kyclaptop"
          >
            <div><img src="https://blockpass.org/wp-content/themes/blockpass/images/console_1.png" /></div>
            <div><img src="https://blockpass.org/wp-content/themes/blockpass/images/console_2.png" /></div>
            <div><img src="https://blockpass.org/wp-content/themes/blockpass/images/console_3.png" /></div>
            <div><img src="https://blockpass.org/wp-content/themes/blockpass/images/console_4.png" /></div>
            <div><img src="https://blockpass.org/wp-content/themes/blockpass/images/console_5.png" /></div>
            <div><img src="https://blockpass.org/wp-content/themes/blockpass/images/console_6.png" /></div>
            <div><img src="https://blockpass.org/wp-content/themes/blockpass/images/console_7.png" /></div>
          </Slider>
        </Grid>
      </Grid>
    </div>
  );
};

export default KYCDashboardCarousel;
