import React, { Component } from 'react';
import logo from 'img/logo.svg';

// Component
import NavBar from 'components/common/navBar.jsx';
import TopBanner from 'components/top_banner/index.jsx';
import Product from '../../components/product'
import News from '../../components/news'

class PageIndex extends Component {
  render() {
    return (
      <div className="App container-with-nav-bar" >
        <NavBar />
        <TopBanner />
        <Product />
        <News />
      </div>
    );
  }
}

export default PageIndex;
