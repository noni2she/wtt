import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import DownloadItem from './downloadItem.jsx';

export default class Download extends Component {
  render() {
    const { header, subheader, downloadItem } = this.props.download;
    // const downloadList = download.downloadItem.map((item, index) => <DownloadItem downloadItem={item} key={'downItem_' + index}/>);
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
        <div className="download-title">
          <h2>{header}</h2>
          <p>{subheader}</p>
        </div>
        { downloadItemFirst }
        { moreButton }
      </div>
    );
  }
}

Download.propTypes = {
  download: PropTypes.object
};
