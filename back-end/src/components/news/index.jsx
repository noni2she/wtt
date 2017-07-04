import React, { Component } from 'react';
import Slider from 'react-slick';
import NewsItem from './newsItem.jsx';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3
  // arrows: false,
  // centerMode: true
};

export default class News extends Component {
  render () {
    const {header, subheader, newsItems} = this.props.news;
    const newsItemList = newsItems.map((item, index) => <div className="newsItem-div"><NewsItem newsItem={item} key={'newsItem_'+index}/></div>);
    return (
      <div id="news">
        <div>
          <h2 className="text-uppercase" >{header}</h2>
          <p>{subheader}</p>
        </div>
        <div className="container">
          <Slider {...settings} className="item-container">
            {newsItemList}
          </Slider>
        </div>
      </div>
    );
  }  
}
