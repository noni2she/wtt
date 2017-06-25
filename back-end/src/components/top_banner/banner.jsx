import React from 'react';

const Banner = (props) => {
  return <img src={props.info.url} alt={props.info.alt}></img>;
}

export default Banner;
