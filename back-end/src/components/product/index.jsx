import React, {Component} from 'react';
import ProductItem from './product.jsx';

export default class Product extends Component {
  render () {
    const {header, subheader, categoryItems} = this.props.products;
    const ProductList = categoryItems.map((item, index) => {
      let className = `product-item${index%2 + 1}`;
      return(
        <ProductItem categoryItem={item} key={`categoryItem_${index}`} className={className} />
      );
    });
    return (
      <div id="product" className="col-lg-12 col-md-12 col-sm-12">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h2 className="text-uppercase">{header}</h2>
          <p>{subheader}</p>
        </div>
        { ProductList }
      </div>
    );
  }  
}
