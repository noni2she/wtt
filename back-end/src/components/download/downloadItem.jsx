import React, { Component } from 'react';
import ImgItem from 'components/common/imgItem.jsx';

export default class Download extends Component {
  render () {
  const {
    description, link, mainImg, title
  } = this.props.downloadItem;
  const downloadItemDescription = description.map((item, index) => <span key={ `downItemDescription_${index}` }>{item}</span>);
  const downloadItemLink = link.map((item, index) => {
    return(
      <li key={'downItemlink_'+index}>
        <span>{item.key}:</span>
        <a href={item.url}>Download</a>
      </li>
    );
  });
    return (
      <div className="download-item row">
        <div className="download-img col-lg-3 col-lg-offset-1">
          <ImgItem imgItem={mainImg}/>
        </div>
        <div className="download-description col-lg-4">
          <span className="download-description-title"><i className="glyphicon glyphicon-file" />{title}</span>
          <ul className="list-unstyled">
            {downloadItemDescription}
          </ul>
        </div>
        <div className="download-link col-lg-3">
          <i className="glyphicon glyphicon-download-alt"></i>
          <ul className="list-unstyled">
            {downloadItemLink}
          </ul>
        </div>
      </div>
    );
  }  
}
