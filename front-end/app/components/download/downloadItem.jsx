import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImgItem from 'components/common/imgItem.jsx';

export default class DownloadItem extends Component {
  render() {
    const {
      description, link, mainImg, title
    } = this.props.downloadItem;
    const downloadItemDescription = description.map((item, index) => <p key={`downItemDescription_${index}`}>{item}</p>);
    const downloadItemLinkNeedToShow = link.filter((item)=>{
      if (item.key && item.linkUrl) {
        return item;
      }
    });
    const downloadItemLink = downloadItemLinkNeedToShow.map((item, index) => {
      return (
        <li key={`downItemlink_${index}`}>
          <span>
            <p>{item.key}:<a href={item.linkUrl} target="blank">Download</a></p>
          </span>
        </li>
      );
    });
    return (
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
              {downloadItemDescription}
            </ul>
          </div>
          <div className="download-link col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <i className="glyphicon glyphicon-download-alt" />
            <ul className="list-unstyled">
              {downloadItemLink}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

DownloadItem.propTypes = {
  downloadItem: PropTypes.object
};
