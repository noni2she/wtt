/* eslint prefer-const: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import ImgItem from 'components/common/imgItem.jsx';

export default class ProductItem extends Component {

  constructor() {
    super();
    this.seriesList = this.seriesList.bind(this);
  }

  seriesList() {
    const { categoryKey } = this.props;
    const { seriesItems } = this.props.categoryItem;

    const seriesItemsNeedToShow = seriesItems.filter((item) => {
      if (item.displayed) {
        return item;
      }
    });

    const series = seriesItemsNeedToShow.map((seriesItem, index) => {
      const seriesKey = seriesItem.key;
      return (
        <div className="product-series-item col-lg-2 col-md-3 col-sm-3 col-xs-3" key={`productItem_${categoryKey}_${index}`}>
          <Link to={`product/${categoryKey}/${seriesKey}`}>
            <p>{`-${seriesItem.shortName} Series`}</p>
          </Link>
        </div>
      );
    });

    return (
      seriesItemsNeedToShow.length > 0 ? (
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 product-series">
          <div className="row col-lg-6 col-md-12 col-sm-12 col-xs-12 col-lg-offset-3 product-series-container">
            {series}
          </div>
        </div>
      ) : ( null )
    );
  }

  render() {
    const { categoryKey, type } = this.props;
    const { name, mainImg, seriesItems } = this.props.categoryItem;
    const className = `product-info${type}`;
    const seriesKey = seriesItems[0].key;

    return (
      <div className="product-item container-fluid">
        <Link to={`product/${categoryKey}/${seriesKey}`}>
          <div className={`${className}`}>
              <h3 className="product-info-name">{`- ${name} -`}</h3>
              <div className="product-img">
                <ImgItem imgItem={mainImg} />
              </div>
          </div>
        </Link>
        {this.seriesList()}
      </div>
    );
  }
}

ProductItem.propTypes = {
  categoryKey: PropTypes.string,
  categoryItem: PropTypes.object,
  type: PropTypes.number,
  seriesItems: PropTypes.array,
  categoryIndex: PropTypes.number,
};
