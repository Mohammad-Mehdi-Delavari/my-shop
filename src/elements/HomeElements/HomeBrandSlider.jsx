import React from "react";
import Slider from "react-slick";
import HomeBrandSliderItems from "./HomeBrandSliderItems";

export default function HomeBrandSlider({infos}) {
  const settings = {
    infinite: true,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    rtl: true,
    arrows: false,
    dots: false,
    responsive:[
        {
          breakpoint: 3000,
          settings: {
            slidesToShow: 7,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 6,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 5,
          },
        },
        {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
            },
          },{
            breakpoint: 410,
            settings: {
              slidesToShow: 2,
            },
          },
        
      ]
  };
  return (
    <div>
      <Slider
        
        {...settings}
      >
        {infos.map((val) => (
          <div key={val.id}>
            <HomeBrandSliderItems key={val.id} {...val} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
