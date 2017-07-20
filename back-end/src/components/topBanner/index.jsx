import React, { Component } from 'react';
import Slider from 'react-slick';
import Banner from 'components/common/imgItem.jsx';
import { Link } from 'react-router';

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
    const { imgItems } = this.props;
    const BannerList = imgItems.map((item, index) => {
      return (
        <div key={`topBanner_+${index}`}>
          <Link to={`/edit/topBanner`}>
            <Banner imgItem={item}/>
          </Link>
        </div>
      );
    });

    return (
      <div className="top-banner">
        {
          Array.isArray(imgItems) && imgItems.length > 0 ? (
            <Slider {...settings}>
              {BannerList}
            </Slider>

          ) : (
            null
          )
        }
      </div>
    );
  }
}
