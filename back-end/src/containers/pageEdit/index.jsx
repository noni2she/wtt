import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from 'containers/common/navBar.jsx';
import Footer from 'components/footer';
import PropTypes from 'prop-types';

// form set 
import SeriesDetailFormSet from './formSet/seriesDetail';

class PageEdit extends Component {
  constructor() {
    super();
    this.targetFormSet = this.targetFormSet.bind(this);
    this.goPrevious = this.goPrevious.bind(this);
  }

  //SeriesDetailFormSet
  renderSeriesDetailFormSet(categoryKey, seriesKey) {
    try {
      const { locales } = this.props;
      const { products } = this.props[locales];

      // get the index of categoryItems and seriesItems
      let categoryItemsIndex, seriesItemsIndex;
      for (let index = 0 ; index < products.categoryItems.length ; index++) {
        if (products.categoryItems[index].key === categoryKey) {
          categoryItemsIndex = index;
          break;
        }
      }
      for (let index = 0 ; index < products.categoryItems[categoryItemsIndex].seriesItems.length ; index++) {
        if (products.categoryItems[categoryItemsIndex].seriesItems[index].key === seriesKey) {
          seriesItemsIndex = index;
          break;
        }
      }

      const seriesItem = products.categoryItems[categoryItemsIndex].seriesItems[seriesItemsIndex];

      return(
        <SeriesDetailFormSet
          locales={locales}
          seriesItem={seriesItem}
          categoryItemsIndex={categoryItemsIndex}
          seriesItemsIndex={seriesItemsIndex}
        />
      );
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  /* render specific form set belonging to each block
   * return false if error was found.
   */
  targetFormSet() {
    const { categoryKey, seriesKey, blockType } = this.context.router.params;

    if (categoryKey && seriesKey) {
      // seriesDetail edit page
      return this.renderSeriesDetailFormSet(categoryKey, seriesKey);

    } else if (blockType) {
      // block edit in index page
      return false;
    } else {
      // nothing or eror params were found
      return false;
    }
  }
  goPrevious(event) {
    if (event) event.preventDefault();
    this.context.router.goBack();
  }
  render() {
    return (
      <div className="container-with-nav-bar">
        <NavBar />
        <div id="page-edit" className="container">
          <div className="page-edit-header">
            <button
              className="btn btn-default"
              type="button"
              onClick={this.goPrevious}
            >
              上一頁
            </button>
          </div>
          { this.targetFormSet() ? (
            this.targetFormSet()
          ) : (
            this.goPrevious()
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

PageEdit.contextTypes = {
  router: PropTypes.object,
};

PageEdit.propTypes = {
  locales: PropTypes.string,
  tw: PropTypes.object,
  en: PropTypes.object,
  jp: PropTypes.object,
};

const mapStateToProps = ({ locales, tw, jp, en }) => {
  return {
    locales,
    tw,
    en,
    jp,
  }
}

export default connect(mapStateToProps)(PageEdit);
