import React, { Component } from 'react';

// component  
import NavBar from '../../components/common/navBar.jsx';
import ProductText from './productText.jsx';
import ProductTable from './productTable.jsx';
import { contentObject, productDetails } from '../../utils/fakeData';

class PageProduct extends Component {
  render() {
    const categoryItem = contentObject.products.categoryItems[0];
    const seriesItem = categoryItem.seriesItems[0];
    
    // fake data for product table
    const { content } = seriesItem;
    const products = productDetails[categoryItem.key][seriesItem.key];
    return (
      <div className="container-with-nav-bar" >
        <NavBar />

        <div id="page-product" className="container">
          <ProductText
            seriesItem={seriesItem}
          />
          <ProductTable
            content={content}
            products={products}
          />
          <div className="empty"></div>
        </div>
      </div>
    );
  }
}

export default PageProduct;
