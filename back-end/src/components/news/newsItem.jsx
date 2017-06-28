import React, { Component } from 'react';
import ImgItem from '../common/imgItem.jsx';

export default class NewsItem extends Component {
  render () {
    const newsItem = this.props.newsItem;
    return (
      <div className = "item">
        <ImgItem imgItem={ newsItem.mainImg } />
        <h3>{ newsItem.header }</h3>
        <p>{ newsItem.subheader }</p>
        <p>{ newsItem.description }</p>
        <p>{ newsItem.position }</p>
      </div>
    );
  }  
}
