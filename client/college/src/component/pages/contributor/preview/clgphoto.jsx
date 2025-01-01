import React from "react";
import Slider from "react-slick";

// Import slick-carousel CSS files
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ClgPhoto = ({ photo }) => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {photo  .map((photo, index) => (
        <div key={index}>
          <img
            src={photo}
            alt={`Slide ${index}`}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ClgPhoto;
