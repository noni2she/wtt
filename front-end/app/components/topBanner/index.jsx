import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import ImgItem from 'components/common/imgItem.jsx';

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false
      }
    }]
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
        <div className="top-banner-container">
          <Slider {...settings}>
            {BannerList}
          </Slider>
        </div>
      </div>
    );
  }
}

TopBanner.propTypes = {
  imgItems: PropTypes.array
};
