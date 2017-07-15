import React, { Component } from 'react';
import ImgItem from 'components/common/imgItem.jsx';
import { Link } from 'react-router';

export default class Download extends Component {
  downloadItemDescription(description) {
    // hide empty description
    let downloadItemDescription = description.filter((item, index) => {
      return item !== '';
    });

    return downloadItemDescription.map((item, index) => {
      return(
        <p key={ `downItemDescription_${index}`}>{item}</p>
      );
    });
  }

  downloadItemLink(link) {
    // hide empty link
    let downloadItemLink = link.filter((item, index) => {
      return item.key !== '';
    });
    return downloadItemLink.map((item, index) => {
      return(
        <li key={'downItemlink_'+index}>
          <span>{item.key}:</span>
          <a href={item.url}>Download</a>
        </li>
      );
    });
  }

  render () {
    const { downloadIndex } = this.props;
    const {
      description, link, mainImg, title
    } = this.props.downloadItem;

    return (
      <div className="download-item row">

        <div className="download-img col-lg-3 col-lg-offset-1">
          <Link to={`/edit/download/downloadItems/${downloadIndex}`}>
            <ImgItem imgItem={mainImg}/>
          </Link>
        </div>

        <div className="download-description col-lg-4">
          <Link to={`/edit/download/downloadItems/${downloadIndex}`}>
            <span className="download-description-title"><i className="glyphicon glyphicon-file" />{title}</span>
            <ul className="list-unstyled">
              {this.downloadItemDescription(description)}
            </ul>
          </Link>
        </div>

        <div className="download-link col-lg-3">
          <i className="glyphicon glyphicon-download-alt"></i>
          <ul className="list-unstyled">
            {this.downloadItemLink(link)}
          </ul>
        </div>
      </div>
    );
  }  
}
