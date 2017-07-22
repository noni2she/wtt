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
  seriesList(categoryItem, categoryKey) {
    const { seriesItems } = categoryItem;

    const series = seriesItems.map((seriesItem, index) => {
      const seriesKey = seriesItem.key;
      return (
        <div className="product-series-item col-lg-2 col-md-3 col-sm-3 col-xs-3" key={`productItem_${categoryKey}_${index}`}>
          <Link to={`/product/${categoryKey}/${seriesKey}`}>
            <p>{`-${seriesItem.shortName} Series`}</p>
          </Link>
        </div>
      );
    });

    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 product-series">
        <div className="row col-lg-6 col-md-12 col-sm-12 col-xs-12 col-lg-offset-3 product-series-container">
          {series}
        </div>
      </div>
    );
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
      const { seriesItem, categoryItem } = contentObject;
      const { content } = seriesItem;
      const products = productsDetail[categoryKey][seriesKey];
      return (
        <div>
          <NavBar />
          <div className="container-with-nav-bar">
          <div className="product-item container-fluid">
            {this.seriesList(categoryItem, categoryKey)}
          </div>

            <div id="page-product" className="container">
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
