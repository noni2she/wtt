import React, { Component } from 'react';
import NavBar from 'components/common/navBar.jsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { contentObject } from 'utils/fakeData';

// form set 
import SeriesDetailFormSet from './formSet/seriesDetail';

class PageEdit extends Component {
  constructor() {
    super();
    this.targetFormSet = this.targetFormSet.bind(this);
  }

  // render specific form set belonging to each block 
  targetFormSet() {

    // hot code for seriesDetail and passing by fake data
    const seriesItem = contentObject.products.categoryItems[0].seriesItems[0];
    return(<SeriesDetailFormSet seriesItem={seriesItem} />);
  }

  render() {
    return (
      <div className="container-with-nav-bar">
        <NavBar />
        <div id="page-edit" className="container">
          <div className="page-edit-header">
            <Link to="/" >
              <button
                className="btn btn-default"
                type="button"
              >
                上一頁
              </button>
            </Link>
          </div>
          { this.targetFormSet() }
          <div className="empty"></div>
        </div>
      </div>
    );
  }
}

PageEdit.contextTypes = {
  router: PropTypes.object,
};

export default PageEdit;
