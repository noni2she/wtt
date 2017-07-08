import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const categoryKey = 'wheel-spacers';
    const seriesKey = 'hs';

    // get the index of categoryItems and seriesItems
    let categoryItemsIndex, seriesItemsIndex;
    for (let index = 0 ; index < contentObject.products.categoryItems.length ; index++) {
      if (contentObject.products.categoryItems[index].key === categoryKey) {
        categoryItemsIndex = index;
        break;
      }
    }
    for (let index = 0 ; index < contentObject.products.categoryItems[categoryItemsIndex].seriesItems.length ; index++) {
      if (contentObject.products.categoryItems[categoryItemsIndex].seriesItems[index].key === seriesKey) {
        seriesItemsIndex = index;
        break;
      }
    }

    // hot code for seriesDetail and passing by fake data
    const seriesItem = contentObject.products.categoryItems[categoryItemsIndex].seriesItems[seriesItemsIndex];

    return(
      <SeriesDetailFormSet
        locales={this.props.locales}
        seriesItem={seriesItem}
        categoryItemsIndex={categoryItemsIndex}
        seriesItemsIndex={seriesItemsIndex}
      />);
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

const mapStateToProps = ({ locales }) => {
  return {
    locales,
  }
}

export default connect(mapStateToProps)(PageEdit);
