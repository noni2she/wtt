import React from 'react';
import Slider from 'react-slick';
import Banner from './banner.jsx';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true
};

export default (props) => {
  const BannerList = props.bannerInfo.map(info => <div><Banner info={info} /></div>)
  return (
      <Slider {...settings}>
        {BannerList}
      </Slider>
  );
}
