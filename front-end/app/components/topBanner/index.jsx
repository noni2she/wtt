import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import ImgItem from 'components/common/imgItem.jsx';

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
  render() {
    const { imgItems } = this.props;
    const bannerNeedToShow = imgItems.filter((item)=>{
      if (item.displayed) {
        return item;
      }
    });

    const bannerList = bannerNeedToShow.map((item, index) => {
      return (
        <div key={`topBanner_${index}`}>
          <ImgItem imgItem={item}/>
        </div>
      );
    });

    return (
      <div id="top-banner">
        <div className="top-banner-container">
          {
            Array.isArray(imgItems) && imgItems.length > 0 ? (
              <Slider {...settings}>
                {bannerList}
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
