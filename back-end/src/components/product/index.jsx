import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import ProductItem from './product.jsx';
import { PRODUCT_STYLE_CYCLE } from 'constants/common'

export default class Product extends Component {
  constructor() {
    super();
    this.onCreateBtnClick = this.onCreateBtnClick.bind(this);
  }

  onCreateBtnClick(event) {
    event.preventDefault();

    this.context.router.push(`/edit/category/new/`);
  }

  productListGernerator(categoryItems) {
    return (
      categoryItems.map((item, index) => {
        const categoryKey = item.key;
        const type = index % PRODUCT_STYLE_CYCLE + 1;

        return(
          <ProductItem
            categoryItem={item}
            type={type}
            categoryKey={categoryKey}
            categoryIndex={index}
            key={`categoryItem_${index}`}
          />
        );
      })
    );
  }

  render () {
    const { header, subheader, categoryItems } = this.props.products;

    return (
      <div id="product" className="container-fluid">
        <Link to={'/edit/category/header'}>
          <div className="product-introduction">
            <h2 className="product-header">{header}</h2>
            <p className="product-subheader">{subheader}</p>
          </div>
        </Link>
        {Array.isArray(categoryItems) && categoryItems.length > 0 ? (
          this.productListGernerator(categoryItems)
        ) : (
          null
        )}

        <div className="product-create">
          <button
            type="button"
            className="btn btn-success"
            onClick={this.onCreateBtnClick}
            style={{
              margin: '30px 0px',
            }}
          >
            新增 category
          </button>
        </div>
      </div>
    );
  }  
}

Product.contextTypes = {
  router: PropTypes.object,
};
