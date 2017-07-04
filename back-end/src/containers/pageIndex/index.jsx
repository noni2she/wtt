import React, { Component } from 'react';
import logo from 'img/logo.svg';


// Component
import NavBar from 'components/common/navBar.jsx';
import TopBanner from 'components/topBanner';
import Product from '../../components/product';
import News from '../../components/news';
import Download from '../../components/download';
import About from '../../components/about';
import Contact from '../../components/contact';

// fake data
import { contentObject } from '../../utils/fakeData';

class PageIndex extends Component {
  render() {
    return (
      <div className="App container-with-nav-bar" >
        <NavBar />
        <TopBanner imgItems={contentObject.topBanner.imgItems} />
        <Product/>
        <News news={contentObject.news} />
        <Download download={contentObject.download} />
        <About about={contentObject.about} />
        <Contact about={contentObject.contact}/>
      </div>
    );
  }
}

export default PageIndex;
