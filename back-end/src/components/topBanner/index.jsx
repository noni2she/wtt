import React, { Component } from 'react';
import Carousel from './carousel.jsx';
import { contentObject } from '../../utils/fakeData';

export default class TopBanner extends Component {
  render () {
    return (
      <div className="top-banner">
        <Carousel imgItems={contentObject.topBanner.imgItems}/>
      </div>
    );
  }  
}
