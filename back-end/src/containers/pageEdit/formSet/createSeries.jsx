import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onCreateFormSubmit } from 'actions/editForm';
import PropTypes from 'prop-types';
import { CREATE_PRODUCT_SERIES } from 'constants/common';

class CreateSeriesFormSet extends Component {
  constructor(props) {
    super();
    this.onFormChange = this.onFormChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      key: '',
      errorMsg: '',
    };
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

  onSubmit(event) {
    event.preventDefault();
    const { locales, categoryIndex } = this.props;
    const {
      key
    } = this.state;
    const regExp = /^[a-z0-9]+$/i;

    if (!key) {
      this.setState({
        errorMsg: '* 此欄位不能空白'
      });
      return;
    }

    if (key.match(regExp)) {
      this.props.onCreateFormSubmit(locales, CREATE_PRODUCT_SERIES, {
        categoryIndex,
        key,
      });

      // navigate to previous page
      this.context.router.goBack();
    }
    else {
      this.setState({
        errorMsg: '* 僅能為英文以及數字組合'
      });
    }
  }

  render() {
    const {
      key, errorMsg
    } = this.state;
    return (
      <div className="page-edit-form-set">
        <form className="page-edit-form-set-series-create">
          <h4 className="form-seperate-header">新增系列項目</h4>
          <div className="form-group">
            <label>Key</label>
            <p className="font-primary">* [必填] 不能重複也無法再更改</p>
            <p className="font-primary">* 僅能為英文以及數字組合</p>
            <input
              className="form-control"
              type="text"
              placeholder="Please enter unique key"
              name="key"
              value={key}
              onChange={this.onFormChange}
            />
            <p
              className="font-danger"
              hidden={errorMsg === ''}
            >
              {errorMsg}
            </p>
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

CreateSeriesFormSet.contextTypes = {
  router: PropTypes.object,
};

CreateSeriesFormSet.propTypes = {
  onEditFormSubmit: PropTypes.func,
}

export default connect(null, { onCreateFormSubmit })(CreateSeriesFormSet);
