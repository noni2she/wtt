import React, { Component } from 'react';
import NavBar from 'components/common/navBar.jsx';
import { NAV_BAR_MESSAGES } from 'constants/common';

class PageMessage extends Component {

  pageNotFound() {
    // when error happened or page not found, redirect to PageIndex
    this.context.router.replace('/');
  }

  render() {
    try {
      return (
        <div className="container-with-nav-bar" >
          <NavBar active={ NAV_BAR_MESSAGES } />
        </div>
      );
    } catch (error) {
      this.pageNotFound();
      return null;
    }
  }
}

export default PageMessage;
