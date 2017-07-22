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
import MessageModal from 'containers/common/messageModal';

import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;

export class NavBar extends Component {
  constructor() {
    super();
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler(event) {
    event.preventDefault();
    const { name } = event.target;

    const dropdownItems = document.getElementsByClassName('navbar-item-dropdown-item');
    if (dropdownItems) {
      Array.prototype.forEach.call(dropdownItems, (element) => {
        element.style = 'display: none;';
      });
    }

    this.props.onLocaleChange(name);
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

  renderScrollLink(id, showText) {
    return (window.location.pathname === '/') ? (
      <ScrollLink
        to={id}
        spy
        smooth
        offset={-64}
        duration={500}
      >
        {showText}
      </ScrollLink>
    ) : (
      <Link to={`/#${id}`}>
        {showText}
      </Link>
    );
  }

  showDropdownItem() {
    const dropdownItems = document.getElementsByClassName('navbar-item-dropdown-item');
    if (dropdownItems) {
      Array.prototype.forEach.call(dropdownItems, (element) => {
        element.style = 'display: initial;';
      });
    }
  }

  render() {
    const { locales } = this.props;
    return (
      <nav id="navbar" className="common-navbar container">
        <div className="navbar-content">

          <ul className="navbar-content-right">
            <li className="navbar-content-logo">
              <Link to={'/'}>
                <div className="navbar-content-logo-img"></div>
              </Link>
            </li>
          </ul>
          <ul className="navbar-content-left">

            <li className="navbar-content-item navbar-content-item-pc">{this.renderScrollLink('about', 'ABOUT US')}</li>
            <li className="navbar-content-item navbar-content-item-pc">{this.renderScrollLink('product', 'PRODUCTS')}</li>
            <li className="navbar-content-item navbar-content-item-pc">{this.renderScrollLink('news', 'NEWS')}</li>
            <li className="navbar-content-item navbar-content-item-pc">{this.renderScrollLink('download', 'DOWNLOAD')}</li>
            <li className="navbar-content-item navbar-content-item-pc">{this.renderScrollLink('contact', 'CONTACT')}</li>
            <li className="navbar-content-item navbar-content-item-pc navbar-item-dropdown">
              <div onMouseEnter={this.showDropdownItem}>
                <a>{this.currentLocaleDisplay(locales)}</a>
                <span className="drop-icon glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
              </div>

              <div className="navbar-item-dropdown-item" onClick={this.onClickHandler}><a name={LOCALE_TW}>TW</a></div>
              <div className="navbar-item-dropdown-item" onClick={this.onClickHandler}><a name={LOCALE_JP}>JP</a></div>
              <div className="navbar-item-dropdown-item" onClick={this.onClickHandler}><a name={LOCALE_EN}>EN</a></div>
            </li>

            <li className="navbar-content-item navbar-content-item-mweb"><a>ABOUT US</a></li>
            <li className="navbar-content-message">
              <MessageModal />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  onLocaleChange: PropTypes.func,
  locales: PropTypes.string,
};

NavBar.contextTypes = {
  router: PropTypes.object,
};

const mapStateToProps = ({locales}) => {
  return {
    locales,
  };
};

export default connect(mapStateToProps, { onLocaleChange })(NavBar);
