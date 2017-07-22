import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from 'containers/common/navBar.jsx';
import MessageTable from './messageTable.jsx';

import { NAV_BAR_MESSAGES } from 'constants/common';

class PageMessage extends Component {

  // when error happened or page not found, redirect to PageIndex
  pageNotFound() {
    this.context.router.replace('/');
  }

  render() {
    try {
      const { messageItems } = this.props;
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

const mapStateToProps = ({ messageItems }) => {
  return { messageItems };
}
export default connect(mapStateToProps)(PageMessage);
