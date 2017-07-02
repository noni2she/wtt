import React from 'react';
import { Link } from 'react-router';
import { NAV_BAR_INDEX, NAV_BAR_MESSAGES, NAV_BAR_PRODUCTS } from '../../constants/common';

export default (props) => {
  const { active } = props;
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <Link to={'/'} className="navbar-brand">
            WTT 後台編輯
          </Link>
          
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className={ active === NAV_BAR_INDEX ? "active" : ''}><Link to={'/'} >頁面管理</Link></li>
            <li className={ active === NAV_BAR_PRODUCTS ? "active" : ''}><Link to={'/product/wheel-spacers/hs'} >商品管理</Link></li>
            <li className={ active === NAV_BAR_MESSAGES ? "active" : ''}><Link to={'/messages'} >留言板管理</Link></li>
            <li className="dropdown">
              <Link
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              > 
                語言
                <span className="caret"></span>
              </Link>
              <ul className="dropdown-menu">
                <li><Link to={'/'}>TW</Link></li>
                <li><Link to={'/'}>EN</Link></li>
                <li><Link to={'/'}>JP</Link></li>
              </ul>
            </li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
            <li>
              <button type="button" className="btn btn-primary btn-nav-bar">發布</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  ); 

}