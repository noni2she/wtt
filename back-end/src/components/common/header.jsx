import React from 'react';

const Header = (props) => {
  return(
    <div>
      <h2>{props.header.title}</h2>
      <p>{props.header.subTitle}</p>
    </div>
  );
}

export default Header;
