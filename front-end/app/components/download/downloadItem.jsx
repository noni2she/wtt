import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImgItem from 'components/common/imgItem.jsx';

export default class DownloadItem extends Component {
  render() {
    const {
      description, link, mainImg, title
    } = this.props.downloadItem;
    const downloadItemDescription = description.map((item, index) => <p key={ `downItemDescription_${index}` }>{item}</p>);
    const downloadItemLink = link.map((item, index) => {
      return (
        <li key={`downItemlink_${index}`}>
          <p>{item.key}:</p>
          <a href={item.url}>Download</a>
        </li>
      );
    });
    return (
      <div className="download-item">
        <div className="download-img col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <ImgItem imgItem={mainImg}/>
        </div>
        <div className="download-description col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <h4 className="download-description-title">
            <i className="glyphicon glyphicon-file" />
              { title }
          </h4>
          <ul className="list-unstyled">
            { downloadItemDescription }
          </ul>
        </div>
        <div className="download-link col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <i className="glyphicon glyphicon-download-alt" />
          <ul className="list-unstyled">
            {downloadItemLink}
          </ul>
        </div>
      </div>
    );
  }
}

DownloadItem.propTypes = {
  downloadItem: PropTypes.object
};
