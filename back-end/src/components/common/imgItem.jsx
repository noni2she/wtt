import React from 'react';

const ImgItem = (props) => {
  return props.imgItem.displayed ? <img src={props.imgItem.imgUrl} alt={props.imgItem.altText}></img> : null;
}

export default ImgItem;
