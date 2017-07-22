import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import NewsItem from './newsItem.jsx';

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }
  ]
};

export default class News extends Component {
  sliderGenerator(newsItems) {
    const newsItemsNeedToShow = newsItems.filter((item)=>{
      if (item.displayed) {
        return item;
      }
    });

    let newsItemList = newsItemsNeedToShow.map((item, index) => {
      return (
        <div
          className="newsItem-div"
          key={`newsItem_${index}`}
        >
          <NewsItem newsItem={item}/>
        </div>
      );
    });

    let newSetting;
    if (newsItemList.length < 3) {
      newSetting = {
        dots: false,
        arrows: false
      };
    }

    if (newsItemList.length > 0) {
      let index = newsItemList.length;
      while (index < 3) {
        newsItemList.push(
          <div
            className="newsItem-div"
            key={`newsItem_${index}`}
          >
            <NewsItem newsItem={newsItemsNeedToShow[0]}/>
          </div>
        );
        index++;
      }
    }

    return (
      <div className="news-slider-container">
        <Slider {...{...settings, ...newSetting}} className="news-item-container">
          {newsItemList}
        </Slider>
      </div>
    );
  }

  render() {
    const {header, subheader, newsItems} = this.props.news;

    return (
      <div id="news">
        <div className="news-title">
          <h2>{ header }</h2>
          <p>{ subheader }</p>
        </div>

        { Array.isArray(newsItems) && newsItems.length > 0 ? this.sliderGenerator(newsItems) : null}

      </div>
    );
  }
}

News.propTypes = {
  news: PropTypes.object
};
