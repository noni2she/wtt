import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  LOCALE_TW, LOCALE_JP, LOCALE_EN,
  NAV_BAR_LANGUAGE_TW, NAV_BAR_LANGUAGE_JP, NAV_BAR_LANGUAGE_EN,
  WEBSITE_TITLE_TW, WEBSITE_TITLE_JP, WEBSITE_TITLE_EN
} from 'constants/common';
import { onLocaleChange } from 'actions/locales';
import MessageModal from 'components/common/messageModal';

import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;

export class NavBar extends Component {
  constructor() {
    super();
    this.onClickHandler = this.onClickHandler.bind(this);
    this.mwebDropDownClickHandler = this.mwebDropDownClickHandler.bind(this);
    this.showLocaleDropdownItem = this.showLocaleDropdownItem.bind(this);
    this.showAnchorDropdownItem = this.showAnchorDropdownItem.bind(this);
    this.renderMwebScrollLink = this.renderMwebScrollLink.bind(this);
    this.hideDropdownItem = this.hideDropdownItem.bind(this);
    this.state = {
      showAnchorDropDown: true,
      showLocaleDropDown: true,
    };
  }

  mwebDropDownClickHandler({ target }) {
    const { name = '' } = target;
    const { showAnchorDropDown, showLocaleDropDown } = this.state;

    if (name === 'anchor') {
      if (showAnchorDropDown) this.showAnchorDropdownItem();
      else this.hideDropdownItem();
      this.setState({
        showAnchorDropDown: !showAnchorDropDown,
      });
    } else if (name === 'locale') {
      if (showLocaleDropDown) this.showLocaleDropdownItem();
      else this.hideDropdownItem();
      this.setState({
        showLocaleDropDown: !showLocaleDropDown,
      });
    }
  }

  onClickHandler(event) {
    const { name } = event.target;

    this.props.onLocaleChange(name);
    this.changeWebsiteTitle(name);

    const dropdownItems = document.getElementsByClassName('navbar-item-dropdown-item');
    if (dropdownItems) {
      Array.prototype.forEach.call(dropdownItems, (element) => {
        element.style.display = 'none';
      });
    }
  }

  changeWebsiteTitle(locales) {
    switch (locales) {
      case LOCALE_TW:
        document.title = WEBSITE_TITLE_TW;
        break;
      case LOCALE_JP:
        document.title = WEBSITE_TITLE_JP;
        break;
      case LOCALE_EN:
      default:
        document.title = WEBSITE_TITLE_EN;
        break;
    }
  }

  currentLocaleDisplay(locales) {
    switch (locales) {
    case LOCALE_TW:
      return NAV_BAR_LANGUAGE_TW;
    case LOCALE_JP:
      return NAV_BAR_LANGUAGE_JP;
    case LOCALE_EN:
      return NAV_BAR_LANGUAGE_EN;
    default:
      return ('語言');
    }
  }

  renderPCScrollLink(id, showText) {
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

  renderMwebScrollLink(id, showText) {
    return (window.location.pathname === '/') ? (
      <a onClick={this.hideDropdownItem} href={`#${id}`}>{showText}</a>
    ) : (
      <Link to={`/#${id}`}>
        {showText}
      </Link>
    );
  }

  showDropdownItem() {
    const dropdownItems = document.querySelectorAll('.navbar-item-dropdown-item.dropdown-item-pc');
    if (dropdownItems) {
      Array.prototype.forEach.call(dropdownItems, (element) => {
        element.style.display = 'initial';
      });
    }
  }

  showLocaleDropdownItem() {
    this.hideDropdownItem();

    const dropdownItems = document.querySelectorAll('.navbar-item-dropdown-item.dropdown-item-locale');
    if (dropdownItems) {
      Array.prototype.forEach.call(dropdownItems, (element) => {
        element.style.display = 'initial';
      });
    }
  }

  showAnchorDropdownItem() {
    this.hideDropdownItem();

    const dropdownItems = document.querySelectorAll('.navbar-item-dropdown-item.dropdown-item-anchor');
    if (dropdownItems) {
      Array.prototype.forEach.call(dropdownItems, (element) => {
        element.style.display = 'initial';
      });
    }
  }

  hideDropdownItem() {
    const dropdownItems = document.getElementsByClassName('navbar-item-dropdown-item');
    if (dropdownItems) {
      Array.prototype.forEach.call(dropdownItems, (element) => {
        element.style.display = 'none';
      });
    }

    this.setState({
      showAnchorDropDown: true,
      showLocaleDropDown: true,
    });
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

            <li className="navbar-content-item navbar-content-item-pc">{this.renderPCScrollLink('about', 'ABOUT US')}</li>
            <li className="navbar-content-item navbar-content-item-pc">{this.renderPCScrollLink('product', 'PRODUCTS')}</li>
            <li className="navbar-content-item navbar-content-item-pc">{this.renderPCScrollLink('news', 'NEWS')}</li>
            <li className="navbar-content-item navbar-content-item-pc">{this.renderPCScrollLink('download', 'DOWNLOAD')}</li>
            <li className="navbar-content-item navbar-content-item-pc">{this.renderPCScrollLink('contact', 'CONTACT')}</li>

            <li
              className="navbar-content-item navbar-content-item-pc navbar-item-dropdown drop-icon-lang-switch"
              onMouseEnter={this.showDropdownItem}
              onMouseLeave={this.hideDropdownItem}
            >
              <div><a>{this.currentLocaleDisplay(locales)}</a><span className="drop-icon glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></div>
              <div className="navbar-item-dropdown-item dropdown-item-pc" onClick={this.onClickHandler}><a name={LOCALE_TW}>TW</a></div>
              <div className="navbar-item-dropdown-item dropdown-item-pc" onClick={this.onClickHandler}><a name={LOCALE_JP}>JP</a></div>
              <div className="navbar-item-dropdown-item dropdown-item-pc" onClick={this.onClickHandler}><a name={LOCALE_EN}>EN</a></div>
            </li>

            <li className="navbar-content-item navbar-content-item-mweb navbar-item-dropdown"
              onClick={this.mwebDropDownClickHandler}
              onMouseEnter={this.showAnchorDropdownItem}
              onMouseLeave={this.hideDropdownItem}
              name="anchor"
            >
              <div><a name="anchor">{'Navigate'}</a><span className="drop-icon glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></div>
              <div className="navbar-item-dropdown-item mweb-dropdown-item dropdown-item-anchor">{this.renderMwebScrollLink('about', 'ABOUT US')}</div>
              <div className="navbar-item-dropdown-item mweb-dropdown-item dropdown-item-anchor">{this.renderMwebScrollLink('product', 'PRODUCTS')}</div>
              <div className="navbar-item-dropdown-item mweb-dropdown-item dropdown-item-anchor">{this.renderMwebScrollLink('news', 'NEWS')}</div>
              <div className="navbar-item-dropdown-item mweb-dropdown-item dropdown-item-anchor">{this.renderMwebScrollLink('download', 'DOWNLOAD')}</div>
              <div className="navbar-item-dropdown-item mweb-dropdown-item dropdown-item-anchor">{this.renderMwebScrollLink('contact', 'CONTACT')}</div>
            </li>

            <li className="navbar-content-message">
              <MessageModal layoutPosition="navBar" />
            </li>
            <li className="navbar-content-item navbar-content-item-mweb navbar-item-dropdown navbar-item-dropdown-locale"
              name="locale"
              onClick={this.mwebDropDownClickHandler}
              onMouseEnter={this.showLocaleDropdownItem}
              onMouseLeave={this.hideDropdownItem}
            >
              <div><a name="locale">{this.currentLocaleDisplay(locales)}</a><span className="drop-icon glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></div>
              <div className="navbar-item-dropdown-item mweb-dropdown-item dropdown-item-locale" onClick={this.onClickHandler} onTouchStart={this.onClickHandler}><a name={LOCALE_TW}>TW</a></div>
              <div className="navbar-item-dropdown-item mweb-dropdown-item dropdown-item-locale" onClick={this.onClickHandler} onTouchStart={this.onClickHandler}><a name={LOCALE_JP}>JP</a></div>
              <div className="navbar-item-dropdown-item mweb-dropdown-item dropdown-item-locale" onClick={this.onClickHandler} onTouchStart={this.onClickHandler}><a name={LOCALE_EN}>EN</a></div>
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
