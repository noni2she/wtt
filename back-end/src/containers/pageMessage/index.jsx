import React, { Component } from 'react';
import NavBar from 'containers/common/navBar.jsx';
import MessageTable from './messageTable.jsx';

import { NAV_BAR_MESSAGES } from 'constants/common';
import { messageObject } from 'utils/fakeData';

class PageMessage extends Component {

  // when error happened or page not found, redirect to PageIndex
  pageNotFound() {
    this.context.router.replace('/');
  }

  render() {
    try {
      const { messageItems } = messageObject;
      return (
        <div className="container-with-nav-bar">
          <NavBar active={ NAV_BAR_MESSAGES } />
          <div id="page-message" className="container-fluid">
            <MessageTable messageItems={ messageItems }/>
          </div>
        </div>
      );
    } catch (error) {
      this.pageNotFound();
      return null;
    }
  }
}

export default PageMessage;
