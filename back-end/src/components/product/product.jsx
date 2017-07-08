import React from 'react';
import { Link } from 'react-router';
import ImgItem from 'components/common/imgItem.jsx';

const ProductItem = (props) => {
  const {name, seriesItems, mainImg} = props.categoryItem;
  const type = props.type;
  const className = `product-info${type}`;
  const seriesList = (() => {
    let seriesList1 = [];
    for(let i = 0; i < Math.min(seriesItems.length, 6); i++) {
      seriesList1.push(
        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1" key={`productItem_${i}`}>
          <Link to={'/'} > 
            <p>{`-${seriesItems[i].shortName} Series`}</p>
          </Link>
        </div>
      );
    }
    if(seriesItems.length <= 6) { 
      return (
        <div>
          <div className="series row flex-center">
            {seriesList1}
          </div>
        </div>  
      );
    }
    let seriesList2 = [];
    for(let i = 6; i < seriesItems.length; i++) {
      seriesList2.push(
        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1" key={`productItem_${i}`}>
          <Link to={'/'}>
            <p>{`-${seriesItems[i].shortName} Series`}</p>
          </Link>
        </div>
      );
    }
    return (
      <div>
        <div className="series row flex-center">
          {seriesList1}
        </div>
        <div className="series row flex-center">
          {seriesList2}
        </div>
      </div>  
    );
  })();

  return(
    <div className="product-item">
      <div className={`${className} flex-center`}>
        <h3>{`- ${name} -`}</h3>
        <div className="col-lg-2 col-md-2 col-sm-2 product-img">
          <ImgItem imgItem={mainImg} />
        </div>
      </div>
      {seriesList}
    </div>
  );
}

export default ProductItem;