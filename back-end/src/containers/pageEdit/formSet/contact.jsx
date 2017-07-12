import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onEditFormSubmit } from 'actions/editForm';
import PropTypes from 'prop-types';
import { FORM_SET_CONTACT } from 'constants/common';

class ContactFormSet extends Component {
  constructor(props) {
    super();
    this.onFormChange = this.onFormChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      ...props.contact,
    };
  }

  onFormChange({ target }) {
    try {
      const { name, value } = target;
      let imageItem, type;
      let newValue = value;

      if (name === 'mainImg' || name === 'subImg') {
        // imgItem
        imageItem = { ...this.state[name] }
        imageItem.imgUrl = value;
        newValue = imageItem;
      }
      else if (name === 'sns') {
        type = target.getAttribute('data-type');
        newValue = { ...this.state[name] }
        newValue[type].link = value;
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
    const { locales } = this.props;

    this.props.onEditFormSubmit(
      locales, FORM_SET_CONTACT,
      { ...this.state }
    );

    // navigate to previous page
    this.context.router.goBack();
  }

  render() {
    const {
      subImg, company, phone, sns,
      fax, email, location, mainImg
    } = this.state;

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
              value={mainImg.imgUrl}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>地圖</label>
            <input
              className="form-control"
              type="text"
              placeholder="map image url"
              name="subImg"
              value={subImg.imgUrl}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>公司名稱</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="company"
              value={company}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>電話</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="phone"
              value={phone}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>傳真</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="fax"
              value={fax}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>電子郵件</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="email"
              value={email}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>位置</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="location"
              value={location}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>Skype</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              data-type="skype"
              name="sns"
              value={sns.skype.link}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>Facebook</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              data-type="fb"
              name="sns"
              value={sns.fb.link}
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
