import React, { Component } from 'react';
import NavBar from '../../components/common/navBar.jsx';

class PageProduct extends Component {
  // 	.products-contents
	// 	
	// 	.products-information
	// 		.products-description
	// 			.pd-description-title
	// 			.pd-description-feature
	// 			.pd-description-spec
	// 			.pd-description-text
	// 		.products-sub-image
	// .products-slider
	// 	.products-slider-item-image
	// .products-table
	// 	<ReactBootstrapTable />
  render() {
    return (
      <div className="container-with-nav-bar" >
        <NavBar />

        <div id="page-product" className="container">
          <div className="products-contents row ">
            <div className="col-lg-5">
              <div className="products-main-image">
              </div>
            </div>

            <div className="products-information col-lg-7">
              <div className="products-description">
                <h4>Subheading</h4>
                <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
                <h4>Subheading</h4>
                <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
                <h4>Subheading</h4>
                <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
              </div>
              <div className="products-sub-image"></div>
            </div>

          </div>
          <div className="products-slider"></div>
          <div className="products-table"></div>
          <div className="empty"></div>
        </div>
      </div>
    );
  }
}

export default PageProduct;
