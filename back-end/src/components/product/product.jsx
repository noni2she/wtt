import React from 'react';
import { Link } from 'react-router';

const Product = (props) => {
  const seriesList = props.product.series.map(series => <Link to={'/'} ><p>{series}</p></Link>);
  return(
      <div className = "product">
        <div className = "info">
          <img src={props.product.url} alt={props.product.alt} />
          <h2>{props.product.title}</h2>
        </div>
        <div className = "series">
          {seriesList}
        </div>
      </div>
  );
}

export default Product;
