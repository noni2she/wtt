import React, {Component} from 'react';
import ProductItem from './product.jsx';

export default class Product extends Component {
  render () {
    const {header, subheader, categoryItems} = this.props.products;
    const ProductList = categoryItems.map((item, index) => {
    const type = index%2 + 1;
      return(
        <ProductItem categoryItem={item} type={type} key={`categoryItem_${index}`} />
      );
    });
    return (
      <div id="product" className="container-fluid">
        <div>
          <h2 className="text-uppercase">{header}</h2>
          <p>{subheader}</p>
        </div>
        {ProductList}
      </div>
    );
  }  
}
