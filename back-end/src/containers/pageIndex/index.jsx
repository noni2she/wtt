import React, { Component } from 'react';
import logo from 'img/logo.svg';

// Component
import NavBar from 'components/common/navBar.jsx';
import TopBanner from 'components/top_banner/index.jsx';

class PageIndex extends Component {
  render() {
    return (
      <div className="App container-with-nav-bar" >
        <NavBar />
        <TopBanner />
      </div>
    );
  }
}

export default PageIndex;
