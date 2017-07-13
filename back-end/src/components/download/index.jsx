import React, { Component } from 'react';
import { Link } from 'react-router';
import DownloadItem from './downloadItem.jsx';

export default class Download extends Component {
  render () {
    const { downloadItems, header, subheader } = this.props.download;
    const downloadList = downloadItems.map((item, index) => {
      return (
        <DownloadItem
          key={`downItem_${index}`}
          downloadItem={item}
          downloadIndex={index}
        />
      )
    });

    return (
      <div id="download" className=".container-fluid">
        <Link to={'/edit/download/header'}>
          <div>
            <h2>{header}</h2>
            <p>{subheader}</p>
          </div>
        </Link>
        { downloadList }
      </div>
    );
  }  
}
