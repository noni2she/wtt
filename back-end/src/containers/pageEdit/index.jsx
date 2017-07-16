import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from 'containers/common/navBar.jsx';
import Footer from 'components/footer';
import PropTypes from 'prop-types';
import {
  renderHeaderFormSet,
  renderSeriesDetailFormSet,
  renderAboutFormSet,
  renderCategoryFormSet,
  renderNewsItemFormSet,
  renderTopBannerFormSet,
  renderContactFormSet,
  renderDownloadItemFormSet,
  renderCreateSeriesFormSet,
  renderCreateCategoryFormSet
} from './renderFormSet';

class PageEdit extends Component {
  constructor() {
    super();
    this.targetFormSet = this.targetFormSet.bind(this);
    this.goPrevious = this.goPrevious.bind(this);
    this.goIndex = this.goIndex.bind(this);
  }
  /* render specific form set belonging to each block
   * return false if error was found.
   */
  targetFormSet() {
    const { categoryKey, seriesKey, blockType, innerBlock, index } = this.context.router.params;
    const props = this.props;

    if (categoryKey && seriesKey) {
      // seriesDetail edit page
      return renderSeriesDetailFormSet(props, categoryKey, seriesKey);

    } else if (blockType) {
      // block edit in index page
      switch (blockType) {
        case 'topBanner':
          return renderTopBannerFormSet(props);

        case 'about':
          return renderAboutFormSet(props);

        case 'news':
          if (innerBlock === 'header') return renderHeaderFormSet(props, blockType);
          else if (innerBlock && index) return renderNewsItemFormSet(props, index);
          else return false;

        case 'contact':
          if (innerBlock === 'header') return renderHeaderFormSet(props, blockType);
          else return renderContactFormSet(props);

        case 'category':
          if (innerBlock === 'header') return renderHeaderFormSet(props, blockType);
          else if (innerBlock === 'new') return renderCreateCategoryFormSet(props);
          else {
            let categoryIndex = innerBlock;
            return renderCategoryFormSet(props, categoryIndex);
          }
        case 'series':
          if (innerBlock === 'new') return renderCreateSeriesFormSet(props, index);
          else return false;
        case 'download':
          if (innerBlock === 'header') return renderHeaderFormSet(props, blockType);
          else if (innerBlock && index) return renderDownloadItemFormSet(props, index);
          else return false;
          
        default:
          return false;
      }
    } else {
      // nothing or eror params were found
      return false;
    }
  }
  goPrevious(event) {
    if (event) event.preventDefault();
    this.context.router.goBack();
  }
  goIndex() {
    this.context.router.replace('/');
    return null;
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
            this.goIndex()
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
