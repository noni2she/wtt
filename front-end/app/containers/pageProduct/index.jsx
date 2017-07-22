import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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
    };
    this.searchCategoryAndSeries = this.searchCategoryAndSeries.bind(this);  
  }

  /* search categoryItem and seriesItem by page params.
   * set contentObject state based on locales
   */
  searchCategoryAndSeries(props) {
    try {
      // gathering the params given from page and choosn language 
      const { categoryKey, seriesKey } = this.context.router.params
      const { locales } = props;
      const { products } = props[locales];

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
      const contentObject = (targetCategoryItem && targetSeriesItem ) ? ({
        categoryItem: targetCategoryItem,
        seriesItem: targetSeriesItem,
      }) : (
        false
      );
      if (!contentObject) this.pageNotFound();

      this.setState({
        contentObject
      });
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  pageNotFound() {
    // when error happened or page not found, redirect to PageIndex
    this.context.router.replace('/');
  }

  componentWillReceiveProps(nextProps) {
    // receive central state and set local state
    this.searchCategoryAndSeries(nextProps);
  }

  componentDidMount() {
    // get the object first
    this.searchCategoryAndSeries(this.props);
  }

  render() {
    try {
      const { categoryKey, seriesKey } = this.context.router.params;

      /* contentObject based on locales
       * productsDetail are the content of table.
       * as long as one of them was not found, render nothing.
       */
      const { contentObject } = this.state;
      const { productsDetail } = this.props;
      if (!contentObject || !productsDetail) return null;

      /*
       * content: table schema about series controlled by language.
       * products: table content about given series
       */
      const { seriesItem } = contentObject;
      const { content } = seriesItem;
      const products = productsDetail[categoryKey][seriesKey];
      return (
        <div>
          <NavBar />
          <div id="page-product" className="container container-with-nav-bar">
            <div>
              <ProductText
                seriesItem={seriesItem}
              />
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
  en: PropTypes.object,
  jp: PropTypes.object,
  productsDetail: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    locales: state.locales,
    tw: state.tw,
    en: state.en,
    jp: state.jp,
    productsDetail: state.productsDetail,
  };
};

export default connect(mapStateToProps)(PageProduct);
