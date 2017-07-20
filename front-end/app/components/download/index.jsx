import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import DownloadItem from './downloadItem.jsx';

export default class Download extends Component {
  render() {
    const { header, subheader, downloadItem } = this.props.download;
    const downloadItemFirst = downloadItem.length > 0 ? <DownloadItem downloadItem={downloadItem[0]} /> : null;
    const moreButton = downloadItem.length > 1 ? (
      <div className="download-more col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <Link>
          <div className="download-more-button">
            More
          </div>
        </Link>
      </div>
    ) : null;
    return (
      <div id="download">
        <div className="row">
          <div className="download-title col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h2>{header}</h2>
            <p>{subheader}</p>
          </div>
          {downloadItemFirst}
          {moreButton}
        </div>
      </div>
    );
  }
}

Download.propTypes = {
  download: PropTypes.object
};
