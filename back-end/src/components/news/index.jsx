import React, { Component } from 'react';
import { contentObject } from '../../utils/fakeData';

export default class Product extends Component {
  render () {
    return (
      <div className="news-div">
        <div>
          <h2>{contentObject.news.header}</h2>
          <p>{contentObject.news.subheader}</p>
        </div>
      </div>
    );
  }  
}
