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
          categoryIndex={index}
          key={`categoryItem_${index}`}
        />
      );
    });

    return (
      <div id="product" className="container-fluid">
        <Link to={'/edit/category/header'}>
          <div className="product-introduction">
            <h2 className="product-header">{header}</h2>
            <p className="product-subheader">{subheader}</p>
          </div>
        </Link>
        {ProductList}
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
