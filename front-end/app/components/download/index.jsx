import React, { Component } from 'react';
import DownloadItem from './downloadItem.jsx';

export default class Download extends Component {
  render() {
    const download = this.props.download;
    const downloadList = download.downloadItem.map((item, index) => <DownloadItem downloadItem={item} key={'downItem_' + index}/>);
    return (
      <div id="download" className=".container-fluid">
        <h2 className="text-uppercase"> {download.header}</h2>
        <p>{download.subheader}</p>
        { downloadList }
      </div>
    );
  }
}
