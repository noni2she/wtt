import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import DownloadItem from './downloadItem.jsx';
import { onCreateFormSubmit } from 'actions/editForm';
import { CREATE_DOWNLOAD_ITEM, TOAST_TITLE_CREATE_DOWNLOADITEM, TOAST_MESSAGE_SUCCESS } from 'constants/common';
import { successToastr } from 'utils/common';
export class Download extends Component {
  constructor() {
    super();
    this.onCreateBtnClick = this.onCreateBtnClick.bind(this);
  }

  onCreateBtnClick(event) {
    event.preventDefault();

    const { locales } = this.props;
    this.props.onCreateFormSubmit(locales, CREATE_DOWNLOAD_ITEM);

    successToastr({
      title: TOAST_TITLE_CREATE_DOWNLOADITEM,
      message: TOAST_MESSAGE_SUCCESS,
    });
  }

  downloadListGenerator(downloadItems) {
    return (
      downloadItems.map((item, index) => {
        return (
          <DownloadItem
            key={`downItem_${index}`}
            downloadItem={item}
            downloadIndex={index}
          />
        )
      })
    );
  }

  render () {
    const { downloadItems, header, subheader } = this.props.download;
    return (
      <div>
        <div id="download">
          <div className="row">
            <Link to={'/edit/download/header'}>
              <div className="download-title col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h2>{header}</h2>
                <p>{subheader}</p>
              </div>
            </Link>
            { Array.isArray(downloadItems) && downloadItems.length > 0 ? (
              this.downloadListGenerator(downloadItems)
            ) : (
              null
            )}
          </div>
        </div>
        <div className="download_btn">
          <button
            type="button"
            className="btn btn-success"
            onClick={this.onCreateBtnClick}
          >
            新增 DownloadItem
          </button>
        </div>
      </div>
    );
  }  
}

export default connect(null, { onCreateFormSubmit })(Download);
