import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NAV_BAR_INDEX } from 'constants/common';

// Component
import NavBar from 'containers/common/navBar.jsx';
import Download from 'components/download';
import Footer from 'components/footer';

class PageDownload extends Component {
  render() {
    const { locales } = this.props;

    if (!this.props[locales]) return null;
    const { download } = this.props[locales];

    return (
      <div>
        <NavBar active={ NAV_BAR_INDEX } />
        <div className="container-fluid">
          <Download download={download} />
          <Footer />
        </div>
      </div>
    );
  }
}

PageDownload.propTypes = {
  locales: PropTypes.string,
  tw: PropTypes.object,
  en: PropTypes.object,
  jp: PropTypes.object,
};

const mapStateToProps = ({ locales, tw, jp, en }) => {
  return ({
    locales, tw, en, jp,
  });
};

export default connect(mapStateToProps)(PageDownload);
