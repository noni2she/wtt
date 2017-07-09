import React, { Component } from 'react';
import ProductItem from './product.jsx';
import { PRODUCT_STYLE_CYCLE } from 'constants/common'

export default class Product extends Component {
  render () {
    const { header, subheader, categoryItems } = this.props.products;
    const ProductList = categoryItems.map((item, index) => {
      const categoryKey = item.key;
      const type = index % PRODUCT_STYLE_CYCLE + 1;

      return(
        <ProductItem
          categoryItem={item}
          type={type}
          categoryKey={categoryKey}
          key={`categoryItem_${index}`}
        />
      );
    });

    return (
      <div id="product" className="container-fluid">
        <div className="product-introduction">
          <h2 className="product-header text-uppercase ">{header}</h2>
          <p className="product-subheader">{subheader}</p>
        </div>
        {ProductList}
      </div>
    );
  }  
}
