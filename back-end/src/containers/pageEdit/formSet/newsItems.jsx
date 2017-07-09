import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onEditFormSubmit } from 'actions/editForm';
import PropTypes from 'prop-types';

class NewsItemFormSet extends Component {
  constructor(props) {
    super();
    this.onFormChange = this.onFormChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onFormChange({ target }) {
    this.props.onEditFormSubmit();
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
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
                checked={true}
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
              value={'image'}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>標題</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="name"
              value={'name'}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>附標題</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="name"
              value={'name'}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>內文</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="name"
              value={'name'}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>展場日期</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="name"
              value={'name'}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>攤位編號</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="name"
              value={'name'}
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
