import React, {Component} from 'react';
import Header from '../common/header.jsx';

const fakedata = {
  title:'- NEWS -',
  subTitle:'this is news session, provide everything you want',
  
};

export default class Product extends Component {
  render () {
    return (
      <div className="news-div">
        <Header header={fakedata} />
      </div>
    );
  }  
}
