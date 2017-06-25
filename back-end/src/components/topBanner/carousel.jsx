import React from 'react';
import Slider from 'react-slick';
import Banner from '../common/imgItem';

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
  const BannerList = props.imgItems.map(item => <div><Banner imgItem={item} /></div>)
  return (
      <Slider {...settings}>
        {BannerList}
      </Slider>
  );
}
