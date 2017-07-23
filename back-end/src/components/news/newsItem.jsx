import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImgItem from 'components/common/imgItem.jsx';

export default class NewsItem extends Component {
  render() {
    const {
      mainImg, header, subheader,
      description, position, date
    } = this.props.newsItem;

    return (
      <div className = "item">
        <ImgItem imgItem={mainImg} />
        <h3>{header}</h3>
        <p>{subheader}</p>
        <p>{date}</p>
        <p>{description}</p>
        <p>{position}</p>
      </div>
    );
  }  
}

NewsItem.propTypes = {
  newsItem: PropTypes.object
};
