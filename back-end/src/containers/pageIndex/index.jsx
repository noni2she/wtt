import React, { Component } from 'react';
import logo from 'img/logo.svg';

// Component
import NavBar from 'components/common/navBar.jsx';
import TopBanner from 'components/topBanner';
import Product from 'components/product';
import News from 'components/news';
import Download from 'components/download';
import About from 'components/about';
import Contact from 'components/contact';

// fake data
import { contentObject } from '../../utils/fakeData';

class PageIndex extends Component {
  render() {
    const {topBanner, products, news, download, about, contact} = contentObject;
    return (
      <div className="App container-with-nav-bar" >
        <NavBar />
        <TopBanner imgItems={topBanner.imgItems} />
        <Product products={products} />
        <News news={news} />
        <Download download={download} />
        <About about={about} />
        <Contact contact={contact}/>
      </div>
    );
  }
}

export default PageIndex;
