import React, {Component} from 'react';
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
      <div id="product">
        <div>
          <h2>{fakedata.title}</h2>
          <p>{fakedata.subTitle}</p>
        </div>
        <ProductList product={fakedata.product} />
      </div>
    );
  }  
}
