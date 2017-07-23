import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import ImgItem from 'components/common/imgItem.jsx';
import { Link } from 'react-router';

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
};

export default class TopBanner extends Component {
  render () {
    const { imgItems } = this.props;
    const BannerList = imgItems.map((item, index) => {
      return (
        <div key={`topBanner_${index}`}>
          <Link to={`/edit/topBanner`}>
            <ImgItem imgItem={item}/>
          </Link>
        </div>
      );
    });

    return (
      <div id="top-banner">
        <div className="top-banner-container">
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
      </div>
    );
  }
}

TopBanner.propTypes = {
  imgItems: PropTypes.array
};
