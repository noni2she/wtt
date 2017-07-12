import React, { Component } from 'react';
import Slider from 'react-slick';
import ImgItem from 'components/common/imgItem.jsx';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default class TopBanner extends Component {
  render() {
    const BannerList = this.props.imgItems.map((item, index) => {
      return (
        <div key={`topBanner_+${index}`}>
          <ImgItem imgItem={item}/>
        </div>
      );
    });
    return (
      <div id="top-banner">
        <Slider {...settings}>
          {BannerList}
        </Slider>
      </div>
    );
  }
}
