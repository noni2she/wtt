import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { Link } from 'react-router';
import NewsItem from './newsItem.jsx';
import { onCreateFormSubmit } from 'actions/editForm';
import { CREATE_NEWS_ITEM, TOAST_TITLE_CREATE_NEWSITEM, TOAST_MESSAGE_SUCCESS } from 'constants/common';
import { successToastr } from 'utils/common';

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

export class News extends Component {
  constructor() {
    super();
    this.onCreateBtnClick = this.onCreateBtnClick.bind(this);
  }
  onCreateBtnClick(event) {
    event.preventDefault();

    const { locales } = this.props;
    this.props.onCreateFormSubmit(locales, CREATE_NEWS_ITEM);
    successToastr({
      title: TOAST_TITLE_CREATE_NEWSITEM,
      message: TOAST_MESSAGE_SUCCESS,
    });
  }

  sliderGenerator(newsItems) {
    let newSetting;
    let newsItemsToShow = [ ...newsItems ];
    const itemLength = newsItemsToShow.length;

    /* if item counts of newsItems less or equal to 3, pre-process the following two things
     * 1. hide next page arrow
     * 2. push `null` to make up to 3
     */
    if (itemLength <= 3) {
      newSetting = {
        dots: false,
        arrows: false
      };
      for (let i = 0 ; i < 3 - itemLength ; i++) newsItemsToShow.push(null);
    }

    const newsItemList = newsItemsToShow.map((item, index) => {

      return item ? (
        <div
          className="newsItem-div"
          key={`newsItem_${index}`}
        >
          <Link to={`/edit/news/newsItem/${index}`}>
            <NewsItem newsItem={item}/>
          </Link>
        </div>
      ) : (
        <div className="newsItem-div" key={`newsItem_${index}`}></div>
      )
    });

    return (
      <div className="news-slider-container">
        <Slider {...{...settings, ...newSetting}} className="news-item-container">
          {newsItemList}
        </Slider>
      </div>
    );
  }

  render () {
    const {header, subheader, newsItems} = this.props.news;

    return (
      <div id="news">
        <Link to={'/edit/news/header'}>
          <div className="news-title">
            <h2>{header}</h2>
            <p>{subheader}</p>
          </div>
        </Link>

        { Array.isArray(newsItems) && newsItems.length > 0 ? this.sliderGenerator(newsItems) : null}

        <div className="news_btn">
          <button
            type="button"
            className="btn btn-success"
            onClick={this.onCreateBtnClick}
          >
            新增 NewsItem
          </button>
        </div>
      </div>
    );
  }  
}

export default connect(null, { onCreateFormSubmit })(News);
