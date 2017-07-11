import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onEditFormSubmit } from 'actions/editForm';
import PropTypes from 'prop-types';
import { FORM_SET_HEADER } from 'constants/common';

class HeaderFormSet extends Component {
  constructor(props) {
    super();
    const { header, subheader } = props.block;

    this.onFormChange = this.onFormChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      header, subheader
    };
  }

  onSubmit(event) {
    event.preventDefault();
    const {
      locales, blockType
    } = this.props;

    this.props.onEditFormSubmit(
      locales, FORM_SET_HEADER,
      { ...this.state }, blockType,
    );

    // navigate to previous page
    this.context.router.goBack();
  }

  onFormChange({ target }) {
    try {
      const { name, value } = target;

      this.setState({
        [name]: value,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const {
      header, subheader
    } = this.state;
    return (
      <div className="page-edit-form-set">
        <form className="page-edit-form-set-series">
          <h4 className="form-seperate-header">標題區塊</h4>
          <div className="form-group">
            <label>標題</label>
            <input
              id="form-set-series-description-name"
              className="form-control"
              type="text"
              placeholder="Title"
              name="header"
              value={header}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>副標題</label>
            <input
              id="form-set-series-description-name"
              className="form-control"
              type="text"
              placeholder="SubTitle"
              name="subheader"
              value={subheader}
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

HeaderFormSet.contextTypes = {
  router: PropTypes.object,
};

HeaderFormSet.propTypes = {
  onEditFormSubmit: PropTypes.func,
}

export default connect(null, { onEditFormSubmit })(HeaderFormSet);
