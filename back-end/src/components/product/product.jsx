import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import ImgItem from 'components/common/imgItem.jsx';
import SeriesNavBar from 'components/common/seriesNavBar';


export class ProductItem extends Component {

  constructor() {
    super();
    this.onCreateBtnClick = this.onCreateBtnClick.bind(this);
  }

  onCreateBtnClick(event) {
    event.preventDefault();
    const { categoryIndex } = this.props;

    this.context.router.push(`/edit/series/new/${categoryIndex}`);
  }

  render() {
    const { categoryIndex, type, categoryKey} = this.props;
    const { name, mainImg } = this.props.categoryItem;
    const className = `product-info${type}`;

    return(
      <div className="product-item">
        <Link to={`/edit/category/${categoryIndex}`}>
          <div className={className}>
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

        <div className="product-series">
          <div className="product-series-btn">
            <button
              type="button"
              className="btn btn-default"
              onClick={this.onCreateBtnClick}
            >
              新增 series
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ProductItem.contextTypes = {
  router: PropTypes.object,
};

export default ProductItem;
