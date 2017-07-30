import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const SeriesNavBar = (props) => {
  const { categoryItem, categoryKey } = props;
  const { seriesItems } = categoryItem;

  const seriesItemsNeedToShow = seriesItems.filter((item) => {
    if (item.displayed) {
      return item;
    }
  });

  // it doesn't have to render series nav bar if there is only one seriesItem
  if (seriesItemsNeedToShow.length  <= 1) return null;

  const series = seriesItemsNeedToShow.map((seriesItem, index) => {
    const seriesKey = seriesItem.key;
    return (
      <div className="product-series-item col-lg-2 col-md-3 col-sm-3 col-xs-3" key={`productItem_${categoryKey}_${index}`}>
        <Link to={`/product/${categoryKey}/${seriesKey}`}>
          <p>{`${seriesItem.shortName}`}</p>
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
};

SeriesNavBar.propTypes = {
  categoryKey: PropTypes.string,
  categoryItem: PropTypes.object,
};

export default SeriesNavBar;
