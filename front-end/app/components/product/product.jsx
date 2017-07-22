/* eslint prefer-const: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import ImgItem from 'components/common/imgItem.jsx';
import SeriesNavBar from 'containers/common/seriesNavBar';

export default class ProductItem extends Component {
  render() {
    const { categoryKey, type } = this.props;
    const { name, mainImg, seriesItems } = this.props.categoryItem;
    const className = `product-info${type}`;
    const seriesKey = seriesItems[0].key;


    return (
      <div className="product-item container-fluid">
        <Link to={`/product/${categoryKey}/${seriesKey}`}>
          <div className={`${className}`}>
              <h3 className="product-info-name">{`- ${name} -`}</h3>
              <div className="product-img">
                <ImgItem imgItem={mainImg} />
              </div>
          </div>
        </Link>

        <SeriesNavBar
          categoryItem={this.props.categoryItem}
          categoryKey={categoryKey}
        />

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
