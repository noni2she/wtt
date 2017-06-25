import React, {Component} from 'react';
import Carousel from './carousel.jsx'

const fakedata = [
  {
    url:'https://firebasestorage.googleapis.com/v0/b/techwell-74c86.appspot.com/o/top_banner%2FAD_1.png?alt=media&token=891d542c-969d-402c-94b2-a43d0eef4c18',
    alt:'first'
  },
  {
    url:'https://firebasestorage.googleapis.com/v0/b/techwell-74c86.appspot.com/o/top_banner%2FAD_2.png?alt=media&token=1077c8a3-6bf0-4b70-933f-7ac2c6edbd8f',
    alt:'second'
  }
];

export default class TopBanner extends Component {
  render () {
    return (
      <div className="top-banner">
        <Carousel bannerInfo={fakedata}/>
      </div>
    );
  }  
}
