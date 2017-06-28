import React, { Component } from 'react';
import Slider from 'react-slick';
import Banner from '../common/imgItem.jsx';

import { contentObject } from '../../utils/fakeData';

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
    const BannerList = this.props.imgItems.map((item, index) => <div><Banner imgItem={item} key={'banner_'+index}/></div>);
    return (
      <div className="top-banner">
        <Slider {...settings}>
          {BannerList}
        </Slider>
      </div>
    );
  }  
}
