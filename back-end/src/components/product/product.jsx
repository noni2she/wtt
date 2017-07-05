import React from 'react';
import { Link } from 'react-router';

const ProductItem = (props) => {
  const {name, seriesItems} = props.categoryItem;

  const seriesList = (() => {
    let seriesList1 = [];
    for(let i = 0; i < Math.min(seriesItems.length, 6); i++) {
      seriesList1.push(
        <Link to={'/'} className="col-lg-1 col-md-1 col-sm-1" key={`productItem_${i}`}> 
          <p>{`-${seriesItems[i].shortName} Series`}</p>
        </Link>
      );
    }
    if(seriesItems.length <= 6) { 
      return (
        <div>
          <div className="series col-lg-12 col-md-12 col-sm-12">
            {seriesList1}
          </div>
        </div>  
      );
    }
    let seriesList2 = [];
    for(let i = 6; i < seriesItems.length; i++) {
      seriesList2.push(
        <Link to={'/'} className="col-lg-1 col-md-1 col-sm-1" key={`productItem_${i}`}>
          <p>{`-${seriesItems[i].shortName} Series`}</p>
        </Link>
      );
    }
    return (
      <div>
        <div className="series col-lg-12 col-md-12 col-sm-12">
          {seriesList1}
        </div>
        <div className="series col-lg-12 col-md-12 col-sm-12">
          {seriesList2}
        </div>
      </div>  
    );
  })();

  return(
    <div className="col-lg-12 col-md-12 col-sm-12">
      <div className={props.className}>
        <h3>{`- ${name} -`}</h3>
      </div>
      {seriesList}
    </div>
  );
}

export default ProductItem;