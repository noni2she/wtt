import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onEditFormSubmit, onDeleteFormSubmit } from 'actions/editForm';
import PropTypes from 'prop-types';
import { FORM_SET_DOWNLOAD_ITEM, DELETE_DOWNLOAD_ITEM } from 'constants/common';

class DownloadItemFormSet extends Component {
  constructor(props) {
    super();
    let insufficientCount;
    const { description, link } = props.downloadItem;

    this.onFormChange = this.onFormChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);

    // if the length of description is less than 5, fill it up to 5.
    insufficientCount = 5 - Object.keys(description).length;
    let descriptionArray = [ ...description ];
    for (let index = 0 ; index < insufficientCount ; index++) {
      descriptionArray.push('');
    }
    // if the length of link is less than 5, fill it up to 5.
    insufficientCount = 5 - Object.keys(link).length;
    let linkArray = [ ...link ];
    for (let index = 0 ; index < insufficientCount ; index++) {
      linkArray.push({
        key: '',
        linkUrl: '',
      });
    }

    this.state = {
      ...props.downloadItem,
      description: descriptionArray,
      link: linkArray,
    }
  }

  onFormChange({ target }) {
    try {
      const { name, value, checked } = target;
      let imageItem, index, array;
      let newValue = value;

      if (name === 'mainImg') {
        // imgItem
        imageItem = { ...this.state[name] }
        imageItem.imgUrl = value;
        newValue = imageItem;
      }
       else if (name === 'displayed') {

        // checkbox
        newValue = checked;
      } else if (name === 'description') {
        index = parseInt(target.getAttribute('data-index'), 10);

        // prevent from index of array out of range
        if (index < 0 || index > 5 ) throw Error;

        array =  [ ...this.state[name] ];
        array[index] = value;
        newValue = array;

      } else if (name === 'link') {
        index = parseInt(target.getAttribute('data-index'), 10);

        // prevent from index of array out of range
        if (index < 0 || index > 5 ) throw Error;

        array =  [...this.state[name]];
        array[index][target.getAttribute('data-key')] = value;
        newValue = array;
      }
      this.setState({
        [name]: newValue,
      });
    } catch (error) {
      console.error(error);
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const { locales, downloadItemIndex } = this.props;

    this.props.onEditFormSubmit(
      locales, FORM_SET_DOWNLOAD_ITEM,
      { ...this.state, downloadItemIndex }
    );

    // navigate to previous page
    this.context.router.goBack();
  }

  onDelete(event) {
    event.preventDefault();
    const { locales, downloadItemIndex } = this.props;

    this.props.onDeleteFormSubmit(
      locales, DELETE_DOWNLOAD_ITEM, {
        downloadItemIndex,
      }
    );
    this.context.router.replace('/');
  }

  linkEditFieldGenerator(link) {
    if (!link) return null;

    return (Array.apply(null, new Array(5)).map((value, index) => {
      return(
        <div className="form-group" key={`page-edit-form-set-download-link-${index}`}>
          <h4 className="form-seperate-header">{`下載連結 ${index +1 }`}</h4>
          <label>{`標題`}</label>
          <input
            className="form-control"
            type="text"
            placeholder="the title of download link" 
            name="link"
            data-index={index}
            data-key={'key'}
            value={link[index] ? link[index].key : ''}
            onChange={this.onFormChange}
          />

          <label>{`網址連結`}</label>
          <input
            className="form-control"
            type="text"
            placeholder="download link" 
            name="link"
            data-index={index}
            data-key={'linkUrl'}
            value={link[index] ? link[index].linkUrl : ''}
            onChange={this.onFormChange}
          />
        </div>
      )
    }));
  }

  descriptionEditFieldGenerator(description) {
    if (!description) return null;

    return (Array.apply(null, new Array(5)).map((value, index) => {
      return(
        <div className="form-group" key={`page-edit-form-set-download-description-${index}`}>
          <label>{`敘述 ${index + 1}`}</label>

          <input
            className="form-control"
            type="text"
            placeholder="main-image url" 
            name="description"
            data-index={index}
            value={description[index] ? description[index] : ''}
            onChange={this.onFormChange}
          />
        </div>
      )
    }));
  }

  render() {
    const {
      displayed, mainImg, title,
      description, link
    } = this.state;
    return (
      <div className="page-edit-form-set">
        <form className="page-edit-form-set-downloadItems">
          <h4 className="form-seperate-header">內容</h4>
          <div className="form-group checkbox">
            <label>
              <input
                type="checkbox" 
                name="displayed" 
                onChange={this.onFormChange}
                checked={displayed}
              /> 
              Displayed
            </label>
          </div>
          <div className="form-group">
            <label>主要圖片</label>
            <input
              className="form-control"
              type="text"
              placeholder="main-image url" 
              name="mainImg"
              value={mainImg.imgUrl}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>標題</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={this.onFormChange}
            />
          </div>

          <h4 className="form-seperate-header">{'敘述'}</h4>
          { this.descriptionEditFieldGenerator(description) }

          {this.linkEditFieldGenerator(link)}

          <div className="form-group clearfix form-set-footer">
            <button
              className="btn btn-primary pull-left form-set-footer-save"
              onClick={this.onSubmit}
            >
              儲存
            </button>
            <button
              className="btn btn-danger pull-right"
              onClick={this.onDelete}
            >
              刪除
            </button>
          </div>
        </form>
      </div>
    );
  }
}

DownloadItemFormSet.contextTypes = {
  router: PropTypes.object,
};

DownloadItemFormSet.propTypes = {
  onEditFormSubmit: PropTypes.func,
}

export default connect(null, { onEditFormSubmit, onDeleteFormSubmit })(DownloadItemFormSet);
