import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

// for test
// import {getFirebase} from 'utils/firebase';
// import faker from 'faker';

class PageIndex extends Component {
  componentWillMount() {
    // fake data
    // const messageItem = () => {
    //   return ({
    //     id: faker.random.uuid(),
    //     timestamps: new Date().toString(),
    //     sender: faker.internet.userName(),
    //     receiverEmail: faker.internet.email(),
    //     content: faker.lorem.paragraph(),
    //   });
    // };
    // const message = new messageItem();

    // push to messageItems
    // getFirebase().database().ref().child('messageItems').push().set(message);

    // get messageItems from firebase
    // getFirebase().database().ref('/messageItems').once('value').then(function(snapshot) {
    //   const obj = Object.values(snapshot.val());
    //   console.log(obj);
    // });
  }
  render() {
    const { locales } = this.props;

    if (!this.props[locales]) return null;
    const { topBanner, products, news, download, about, contact } = this.props[locales];

    return (
      <div>
        <NavBar active={NAV_BAR_INDEX} />
        <div className="container-fluid">
          <TopBanner imgItems={topBanner.imgItems} />
          <Product products={products} />
          <News news={news} />
          <Download download={download} showAllItems={false}/>
          <About about={about} />
          <Contact contact={contact} />
          <Footer />
        </div>
      </div>
    );
  }
}

PageIndex.propTypes = {
  locales: PropTypes.string,
  tw: PropTypes.object,
  en: PropTypes.object,
  jp: PropTypes.object,
};

const mapStateToProps = ({ locales, tw, jp, en }) => {
  return {
    locales, tw, en, jp,
  };
};

export default connect(mapStateToProps)(PageIndex);
