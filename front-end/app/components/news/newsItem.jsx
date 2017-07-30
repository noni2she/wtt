import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImgItem from 'components/common/imgItem.jsx';

export default class NewsItem extends Component {
  render() {
    const {
      mainImg = {}, header, subheader,
      description, position, date
    } = this.props.newsItem;
    const { link = '' } = mainImg;

    return (
      <div className = "item">
        <a className="news-item-link" href={link} target="blank">
          <ImgItem imgItem={mainImg} />
          <h3>{header}</h3>
          <p>{subheader}</p>
          <p>{date}</p>
          <p>{description}</p>
          <p>{position}</p>
        </a>
      </div>
    );
  }
}

NewsItem.propTypes = {
  newsItem: PropTypes.object
};
