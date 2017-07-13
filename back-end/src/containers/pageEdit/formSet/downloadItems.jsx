import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onEditFormSubmit } from 'actions/editForm';
import PropTypes from 'prop-types';
// import { FORM_SET_NEWS_ITEM } from 'constants/common';

class NewsItemFormSet extends Component {
  constructor(props) {
    super();
    this.onFormChange = this.onFormChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      ...props.downloadItem
    }
  }

  onFormChange({ target }) {
    // try {
    //   const { name, value, checked } = target;
    //   let imageItem;
    //   let newValue = value;

    //   if (name === 'mainImg') {
    //     // imgItem
    //     imageItem = { ...this.state[name] }
    //     imageItem.imgUrl = value;
    //     newValue = imageItem;
    //   }
    //    else if (name === 'displayed') {

    //     // checkbox
    //     newValue = checked;
    //   }
    //   this.setState({
    //     [name]: newValue,
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
  }

  onSubmit(event) {
    // event.preventDefault();
    // const { locales, newsItemIndex } = this.props;

    // this.props.onEditFormSubmit(
    //   locales, FORM_SET_NEWS_ITEM,
    //   { ...this.state, newsItemIndex }
    // );

    // // navigate to previous page
    // this.context.router.goBack();
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
    console.log(this.state);
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
            <label >主要圖片</label>
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
            <button className="btn btn-danger pull-right">刪除</button>
          </div>
        </form>
      </div>
    );
  }
}

NewsItemFormSet.contextTypes = {
  router: PropTypes.object,
};

NewsItemFormSet.propTypes = {
  onEditFormSubmit: PropTypes.func,
}

export default connect(null, { onEditFormSubmit })(NewsItemFormSet);
