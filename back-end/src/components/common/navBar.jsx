import React from 'react';
import { Link } from 'react-router';

export default () => {
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
            <li className="active"><Link to={'/'} >頁面管理</Link></li>
            <li><Link to={'/products'} >商品管理</Link></li>
            <li><Link to={'/messages'} >留言板管理</Link></li>
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
                <li><Link to={'/'}>zh_TW</Link></li>
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