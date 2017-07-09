import React from 'react';

const ImgItem = (props) => {
  const { imgUrl, altText } = props.imgItem;
  return (  
    <img src={imgUrl} alt={altText}></img>
  );
}

export default ImgItem;
