import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './product.jsx';
import { PRODUCT_STYLE_CYCLE } from 'constants/common';

export default class Product extends Component {

  productListGernerator(categoryItems) {
    const categoryItemsNeedToShow = categoryItems.filter((item) => {
      if (item.displayed && item.seriesItems.length > 0) {
        return item;
      }
    });
    return (
      categoryItemsNeedToShow.length > 0 ? (
        categoryItemsNeedToShow.map((item, index) => {
          const categoryKey = item.key;
          const type = index % PRODUCT_STYLE_CYCLE + 1;

          return (
            <ProductItem
              categoryItem={item}
              type={type}
              categoryKey={categoryKey}
              categoryIndex={index}
              key={`categoryItem_${index}`}
            />
          );
        })
      ) : ( null )
    );
  }

  render() {
    const { header, subheader, categoryItems } = this.props.products;

    return (
      <div id="product">
        <div className="product-introduction">
          <h2 className="product-header">{ header }</h2>
          <p className="product-subheader">{ subheader }</p>
        </div>
        {Array.isArray(categoryItems) && categoryItems.length > 0 ? (
          this.productListGernerator(categoryItems)
        ) : (
          null
        )}
      </div>
    );
  }
}

Product.propTypes = {
  products: PropTypes.object
};
