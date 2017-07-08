import React, { Component } from 'react';
import NavBar from 'components/common/navBar.jsx';
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
      const {header, messageItems} = messageObject;
      return (
        <div className="container-with-nav-bar" >
          <NavBar active={ NAV_BAR_MESSAGES } />
          <div className="container-fluid">
            <div className="message-header">
              <h2>{ header }</h2>
            </div>
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
