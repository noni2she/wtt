import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onEditFormSubmit } from 'actions/editForm';
import PropTypes from 'prop-types';

class ContactFormSet extends Component {
  constructor(props) {
    super();
    this.onFormChange = this.onFormChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      ...props.about,
    };
  }

  onFormChange({ target }) {
    this.props.onEditFormSubmit();
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    const {
      subImg, company, phone, 
      fax, email, location, mainImg
    } = this.props.contact;
    return (
      <div className="page-edit-form-set">
        <form className="page-edit-form-set-category">
          <h4 className="form-seperate-header">聯絡我們</h4>
          <div className="form-group">
            <label>主要圖片</label>
            <input
              className="form-control"
              type="text"
              placeholder="main-image url" 
              name="mainImg"
              value={ mainImg.imgUrl }
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>地圖</label>
            <input
              className="form-control"
              type="text"
              placeholder="main-image url" 
              name="mainImg"
              value={ subImg.imgUrl }
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>公司名稱</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="name"
              value={ company }
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>電話</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="name"
              value={ phone }
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>傳真</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="name"
              value={ fax }
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>電子郵件</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="name"
              value={ email }
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>位置</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="name"
              value={ location }
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
          </div>
        </form>
      </div>
    );
  }
}

ContactFormSet.contextTypes = {
  router: PropTypes.object,
};

ContactFormSet.propTypes = {
  onEditFormSubmit: PropTypes.func,
}

export default connect(null, { onEditFormSubmit })(ContactFormSet);
