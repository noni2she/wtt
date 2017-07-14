import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { Link } from 'react-router';
import NewsItem from './newsItem.jsx';
import { onCreateFormSubmit } from 'actions/editForm';
import { CREATE_NEWS_ITEM } from 'constants/common';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3
  // arrows: false,
  // centerMode: true
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
  }

  render () {
    const {header, subheader, newsItems} = this.props.news;
    const newsItemList = newsItems.map((item, index) => {
      return (
        <div
          className="newsItem-div"
          key={`newsItem_+${index}`}
        >
          <Link to={`/edit/news/newsItem/${index}`}>
            <NewsItem newsItem={item}/>
          </Link>
        </div>
      );
    });

    return (
      <div id="news">
        <Link to={'/edit/news/header'}>
          <div>
            <h2>{header}</h2>
            <p>{subheader}</p>
          </div>
        </Link>
        <div className="container">
          <Slider {...settings} className="item-container">
            {newsItemList}
          </Slider>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-success"
            style={{marginTop: '30px'}}
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
