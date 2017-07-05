import React from 'react';
import { Link } from 'react-router';

const ProductItem = (props) => {
  const {name, seriesItems} = props.categoryItem;

  const seriesList = (() => {
    let seriesList1 = [];
    for(let i = 0; i < Math.min(seriesItems.length, 6); i++) {
      seriesList1.push(
        <Link to={'/'} key={`productItem_${i}`}> 
          <p>{`-${seriesItems[i].shortName} Series`}</p>
        </Link>
      );
    }
    if(seriesItems.length <= 6) { 
      return (
        <div>
          <div className="series">
            {seriesList1}
          </div>
        </div>  
      );
    }
    let seriesList2 = [];
    for(let i = 6; i < seriesItems.length; i++) {
      seriesList2.push(
        <Link to={'/'} key={`productItem_${i}`}>
          <p>{`-${seriesItems[i].shortName} Series`}</p>
        </Link>
      );
    }
    return (
      <div>
        <div className="series">
          {seriesList1}
        </div>
        <div className="series">
          {seriesList2}
        </div>
      </div>  
    );
  })();

  return(
    <div>
      <div className={props.className}>
        <h3>{`- ${name} -`}</h3>
      </div>
      {seriesList}
    </div>
  );
}

export default ProductItem;