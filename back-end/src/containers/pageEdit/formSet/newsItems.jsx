import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onEditFormSubmit, onDeleteFormSubmit } from 'actions/editForm';
import PropTypes from 'prop-types';
import { FORM_SET_NEWS_ITEM, DELETE_NEWS_ITEM } from 'constants/common';

class NewsItemFormSet extends Component {
  constructor(props) {
    super();
    this.onFormChange = this.onFormChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.state = {
      ...props.newsItem
    }
  }

  onFormChange({ target }) {
    try {
      const { name, value, checked } = target;
      let imageItem;
      let newValue = value;

      if (name === 'mainImg') {
        const dataKey = target.getAttribute('data-key');

        // imgItem
        imageItem = { ...this.state[name] }

        imageItem[dataKey] = value;
        newValue = imageItem;
      }
       else if (name === 'displayed') {

        // checkbox
        newValue = checked;
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
    const { locales, newsItemIndex } = this.props;

    this.props.onEditFormSubmit(
      locales, FORM_SET_NEWS_ITEM,
      { ...this.state, newsItemIndex }
    );

    // navigate to previous page
    this.context.router.goBack();
  }

  onDelete(event) {
    event.preventDefault();
    const { locales, newsItemIndex } = this.props;

    this.props.onDeleteFormSubmit(
      locales, DELETE_NEWS_ITEM, {
        newsItemIndex,
      }
    );
    this.context.router.replace('/');
  }

  render() {
    const {
      displayed, mainImg, header, subheader,
      description, date, position,
    } = this.state;

    return (
      <div className="page-edit-form-set">
        <form className="page-edit-form-set-category">
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
              data-key="imgUrl"
              value={mainImg.imgUrl || ''}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>外部連結</label>
            <input
              className="form-control"
              type="text"
              placeholder="link url"
              name="mainImg"
              data-key="link"
              value={mainImg.link || ''}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>標題</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="header"
              value={header}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>附標題</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="subheader"
              value={subheader}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>內文</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="description"
              value={description}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>展場日期</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="date"
              value={date}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>攤位編號</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="position"
              value={position}
              onChange={this.onFormChange}
            />
          </div>
          

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

NewsItemFormSet.contextTypes = {
  router: PropTypes.object,
};

NewsItemFormSet.propTypes = {
  onEditFormSubmit: PropTypes.func,
}

export default connect(null, { onEditFormSubmit, onDeleteFormSubmit })(NewsItemFormSet);
