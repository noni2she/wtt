import React, {Component} from 'react';
import Header from '../common/header.jsx';
import ProductList from './product.jsx';

const fakedata = {
  title:'- PRODUCT -',
  subTitle:'this is product session, provide everything you want',
  product:{
    title:'-WHEEL SPACERS-',
    url:'',
    alt:'',
    series:[
      '-Hs Series',
      '-BHA Series',
      '-WS Series',
      '-SWA Series',
      '-SHS Series'
    ]
  }
};

export default class Product extends Component {
  render () {
    return (
      <div className="product-div">
        <Header header={fakedata} />
        <ProductList product={fakedata.product} />
      </div>
    );
  }  
}
