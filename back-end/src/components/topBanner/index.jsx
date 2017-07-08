import React, { Component } from 'react';
import Slider from 'react-slick';
import Banner from 'components/common/imgItem.jsx';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true
};

export default class TopBanner extends Component {
  render () {
    const BannerList = this.props.imgItems.map((item, index) => <div key={`topBanner_+${index}`}><Banner imgItem={item}/></div>);
    return (
      <div className="top-banner">
        <Slider {...settings}>
          {BannerList}
        </Slider>
      </div>
    );
  }
}
