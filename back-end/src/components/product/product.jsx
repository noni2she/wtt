import React, { Component } from 'react';
import { Link } from 'react-router';
import ImgItem from 'components/common/imgItem.jsx';
import { SERIES_ITEM_COUNT_PER_ROW } from 'constants/common';

export class ProductItem extends Component {

  constructor() {
    super();
    this.seriesList = this.seriesList.bind(this);
  }

  seriesList() {
    const { categoryKey } = this.props;
    const { seriesItems } = this.props.categoryItem;

    let seriesList1 = [];
    let seriesList2 = [];
    let seriesKey;

    for(let i = 0; i < Math.min(seriesItems.length, SERIES_ITEM_COUNT_PER_ROW); i++) {

      seriesKey = seriesItems[i].key;
      seriesList1.push(
        <div className="col-lg-1 col-md-2 col-sm-2 col-xs-2" key={`productItem_${i}`}>
          <Link to={`product/${categoryKey}/${seriesKey}`}>
            <p>{`-${seriesItems[i].shortName} Series`}</p>
          </Link>
        </div>
      );
    }

    for(let i = SERIES_ITEM_COUNT_PER_ROW; i < seriesItems.length; i++) {
      seriesList2.push(
        <div className="col-lg-1 col-md-2 col-sm-2 col-xs-2" key={`productItem_${i}`}>
          <Link to={`product/${categoryKey}/${seriesKey}`}>
            <p>{`-${seriesItems[i].shortName} Series`}</p>
          </Link>
        </div>
      );
    }

    // if seriresList length greater than 6
    return seriesItems.length <= SERIES_ITEM_COUNT_PER_ROW ? (
      <div>
        <div className="product-series row flex-center">
          {seriesList1}
        </div>
      </div>
    ) : (
      <div>
        <div className="product-series row flex-center">
          {seriesList1}
        </div>
        <div className="product-series row flex-center">
          {seriesList2}
        </div>
      </div>  
    );
  }

  render() {
    const { categoryIndex } = this.props;
    const { name, mainImg } = this.props.categoryItem;
    const type = this.props.type;
    const className = `product-info${type}`;

    return(
      <div className="product-item">
        <Link to={`/edit/category/${categoryIndex}`}>
          <div className={`${className} flex-center`}>
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

export default ProductItem;
