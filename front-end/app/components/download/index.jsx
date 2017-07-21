import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import DownloadItem from './downloadItem.jsx';

export default class Download extends Component {
  render() {
    const { header, subheader, downloadItems } = this.props.download;
    const showAllItems = this.props.showAllItems;
    let downloadItemList;
    if (Array.isArray(downloadItems)) {
      if (showAllItems) {
        downloadItemList = downloadItems.map((item, index) => <DownloadItem downloadItem={item} key={'downItem_' + index}/>);
      } else {
        downloadItemList = downloadItems.length > 0 ? (
          <DownloadItem downloadItem={downloadItems[0]} />
        ) : (
          null
        );
      }
    }

    const moreButton = !showAllItems && (Array.isArray(downloadItems) && downloadItems.length > 1) ? (
      <div className="download-more col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <Link>
          <div className="download-more-button">
            More
          </div>
        </Link>
      </div>
    ) : (
      null
    );

    return (
      <div id="download">
        <div className="row">
          <div className="download-title col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h2>{header}</h2>
            <p>{subheader}</p>
          </div>
          {downloadItemList}
          {moreButton}
        </div>
      </div>
    );
  }
}

Download.propTypes = {
  download: PropTypes.object,
  showAllItems: PropTypes.bool
};
