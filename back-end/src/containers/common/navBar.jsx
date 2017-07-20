import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  NAV_BAR_INDEX, NAV_BAR_MESSAGES,
  LOCALE_TW, LOCALE_JP, LOCALE_EN,
  NAV_BAR_LANGUAGE_TW, NAV_BAR_LANGUAGE_JP, NAV_BAR_LANGUAGE_EN,
} from 'constants/common';
import { onLocaleChange } from 'actions/locales';
import { setData } from 'utils/firebase';
import { FIREBASE_ROOT } from 'constants/config';

export class NavBar extends Component {
  constructor() {
    super();
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onClickHandler(event) {
    event.preventDefault();
    const { name } = event.target;
    const { onLocaleChange } = this.props;

    onLocaleChange(name);
  }

  currentLocaleDisplay(locales) {
    switch(locales) {
      case LOCALE_TW:
        return NAV_BAR_LANGUAGE_TW;
      case LOCALE_JP:
        return NAV_BAR_LANGUAGE_JP;
      case LOCALE_EN:
        return NAV_BAR_LANGUAGE_EN;
      default:
        return('語言');
    }
  }

  onSubmitHandler(event) {
    event.preventDefault();

    const { tw, jp, en, productsDetail } = this.props;
    const rootObject = {
      tw, jp, en, productsDetail
    }

    setData(FIREBASE_ROOT, rootObject)
      .then(() => {
        console.log('succeed');
      });
  }
  render() {
    const { active, locales } = this.props;

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
              <li className={ active === NAV_BAR_MESSAGES ? "active" : ''}><Link to={'/messages'} >留言板管理</Link></li>
              <li className="dropdown">
                <Link
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {this.currentLocaleDisplay(locales)}
                  <span className="caret"></span>
                </Link>
                <ul className="dropdown-menu">
                  <li><a name={LOCALE_TW} onClick={this.onClickHandler}>TW</a></li>
                  <li><a name={LOCALE_EN} onClick={this.onClickHandler}>EN</a></li>
                  <li><a name={LOCALE_JP} onClick={this.onClickHandler}>JP</a></li>
                </ul>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li>
                <button
                  type="button"
                  className="btn btn-primary btn-nav-bar"
                  onClick={this.onSubmitHandler}
                >
                  發布
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  onLocaleChange: PropTypes.func,
  locales: PropTypes.string,
};

const mapStateToProps = ({locales, tw, jp, en, productsDetail}) => {
  return {
    locales, tw, jp,
    en, productsDetail,
  }
}

export default connect(mapStateToProps, { onLocaleChange })(NavBar);
