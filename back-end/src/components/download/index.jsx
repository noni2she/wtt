import React, { Component } from 'react';
import { Link } from 'react-router';
import DownloadItem from './downloadItem.jsx';

export default class Download extends Component {
  render () {
    const download = this.props.download;
    const downloadList = download.downloadItem.map((item, index) => <DownloadItem downloadItem={item} key={'downItem_'+index}/>);
    return (
      <div id="download" className=".container-fluid">
        <Link to={'/edit/download/header'}>
          <div>
            <h2>{download.header}</h2>
            <p>{download.subheader}</p>
          </div>
        </Link>
        { downloadList }
      </div>
    );
  }  
}
