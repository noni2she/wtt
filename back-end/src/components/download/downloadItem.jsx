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
        <li key={`downItemlink_${index}`}>
          <p>{item.key}:</p>
          <p href={item.url}>Download</p>
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
      <Link to={`/edit/download/downloadItems/${downloadIndex}`}>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="download-item row">
            <div className="download-img col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <ImgItem imgItem={mainImg} />
            </div>
            <div className="download-description col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <h4 className="download-description-title">
                <i className="glyphicon glyphicon-file" />
                {title}
              </h4>
              <ul className="list-unstyled">
                {this.downloadItemDescription(description)}
              </ul>
            </div>
            <div className="download-link col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <i className="glyphicon glyphicon-download-alt" />
              <ul className="list-unstyled">
                {this.downloadItemLink(link)}
              </ul>
            </div>
          </div>
        </div>
      </Link>
    );
  }  
}
