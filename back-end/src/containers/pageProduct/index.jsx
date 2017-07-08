import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { NAV_BAR_PRODUCTS } from 'constants/common';

// component  
import NavBar from 'containers/common/navBar.jsx';
import ProductText from './productText.jsx';
import ProductTable from './productTable.jsx';
import Footer from 'components/footer';

class PageProduct extends Component {
  constructor(props) {
    super();
    this.state = {
      contentObject: null, 
    }
    this.searchCategoryAndSeries = this.searchCategoryAndSeries.bind(this);  
  }

  /* search categoryItem and seriesItem by page params
   * @return 
   *  Object: If both categoryItem and seriesItem were found
   *  fasle: If error was caused or nothing was found
   */
  searchCategoryAndSeries() {
    try {
      // gathering the params given from page and choosn language 
      const { categoryKey, seriesKey } = this.context.router.params
      const { locales } = this.props;
      const { products } = this.props[locales];

      // pick up the category and series which gonna edit by page parma
      let targetCategoryItem, targetSeriesItem;

      // select the first matched one of categoryItem and seriesItem
      products.categoryItems.forEach((categoryItem, index) => {
        if (!targetCategoryItem && categoryItem.key === categoryKey) {
          targetCategoryItem = products.categoryItems[index];
        }
      });

      targetCategoryItem.seriesItems.forEach((seriesItem, index) => {
        if (!targetSeriesItem && seriesItem.key === seriesKey) {
          targetSeriesItem = targetCategoryItem.seriesItems[index];
        }
      });

      // return false as long as one item was not found
      return (targetCategoryItem && targetSeriesItem ) ? ({
        categoryItem: targetCategoryItem,
        seriesItem: targetSeriesItem,
      }) : (
        false
      );

    } catch (error) {
      console.log(error);
      return false;
    }
  }
  pageNotFound() {
    // when error happened or page not found, redirect to PageIndex
    this.context.router.replace('/');
  }
  componentDidMount() {
    // get the object first
    const contentObject = this.searchCategoryAndSeries();
    if (!contentObject) this.pageNotFound();

    this.setState({
      contentObject
    });
  }
  render() {
    try {
      const { categoryKey, seriesKey } = this.context.router.params
      const { productsDetail } = this.props;
      if (!this.state.contentObject || !productsDetail) return null;

      const { seriesItem } = this.state.contentObject;

      /* 
       * content: table schema about series controlled by language.
       * products: table content about given series
       */ 
      const { content } = seriesItem;
      const products = productsDetail[categoryKey][seriesKey];
      return (
        <div className="container-with-nav-bar" >
          <NavBar active={ NAV_BAR_PRODUCTS } />

          <div id="page-product" className="container">
            <div>
              <Link to={`/edit/product/${categoryKey}/${seriesKey}`}>
                <ProductText
                  seriesItem={seriesItem}
                />
              </Link>
            </div>

            <ProductTable
              content={content}
              products={products}
              categoryKey={categoryKey}
              seriesKey={seriesKey}
            />
          </div>
          <Footer />
        </div>
      );
    } catch (error) {
      this.pageNotFound();
      return null;
    }
  }
}

PageProduct.contextTypes = {
  router: PropTypes.object,
};

PageProduct.propTypes = {
  locales: PropTypes.string,
  tw: PropTypes.object,
  productsDetail: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    locales: state.locales,
    tw: state.tw,
    productsDetail: state.productsDetail,
  };
};

export default connect(mapStateToProps)(PageProduct);
