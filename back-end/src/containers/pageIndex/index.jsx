import React, { Component } from 'react';
import { NAV_BAR_INDEX } from 'constants/common';

// Component
import NavBar from 'containers/common/navBar.jsx';
import TopBanner from 'components/topBanner';
import Product from 'components/product';
import News from 'components/news';
import Download from 'components/download';
import About from 'components/about';
import Contact from 'components/contact';
import Footer from 'components/footer';

// fake data
import { fakeContentObjectGenerator } from 'utils/fakeData';

class PageIndex extends Component {
  render() {
    const {topBanner, products, news, download, about, contact} = fakeContentObjectGenerator();
    return (
      <div className="App container-with-nav-bar" >
        <NavBar active={ NAV_BAR_INDEX } />
        <TopBanner imgItems={topBanner.imgItems} />
        <Product products={products} />
        <News news={news} />
        <Download download={download} />
        <About about={about} />
        <Contact contact={contact} />
        <Footer />
      </div>
    );
  }
}

export default PageIndex;
