import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from 'containers/common/navBar.jsx';
import Footer from 'components/footer';
import PropTypes from 'prop-types';
import {
  renderSeriesDetailFormSet,
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
    const { categoryKey, seriesKey, blockType } = this.context.router.params;

    if (categoryKey && seriesKey) {
      // seriesDetail edit page
      const props = this.props;
      return renderSeriesDetailFormSet(props, categoryKey, seriesKey);

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
  goIndex() {
    this.context.router.replace('/');
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
