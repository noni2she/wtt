import React, { Component } from 'react';
import ImgItem from '../common/imgItem.jsx';

export default class Download extends Component {
  render () {
  const downloadItem = this.props.downloadItem;
  const downloadItemDescription = downloadItem.description.map((item, index) => <span key={'downItemDescription_'+index}>{item}</span>);
  const downloadItemLink = downloadItem.link.map((item, index) => {
    return(
      <li key={'downItemlink_'+index}>
        <span className="">{Object.keys(item)[0]}:</span>
        <a href={Object.values(item)[0]}>Download</a>
      </li>
    );
  });
    return (
      <div className="download-item row">
        <div className="download-img col-lg-3 col-lg-offset-1">
          <ImgItem imgItem={downloadItem.mainImg}/>
        </div>
        <div className="download-description col-lg-4">
          <span className="download-description-title"><i className="glyphicon glyphicon-file" />{downloadItem.title}</span>
          <ul className="list-unstyled">
            { downloadItemDescription }
          </ul>
        </div>
        <div className="download-link col-lg-3">
          <i className="glyphicon glyphicon-download-alt"></i>
          <ul className="list-unstyled">
            { downloadItemLink }
          </ul>
        </div>
      </div>
    );
  }  
}
