import React, { Component } from 'react';

const fakedata = {
  title:'- NEWS -',
  subTitle:'this is news session, provide everything you want',
};

export default class Product extends Component {
  render () {
    return (
      <div className="news-div">
        <div>
          <h2>{fakedata.title}</h2>
          <p>{fakedata.subTitle}</p>
        </div>
      </div>
    );
  }  
}
