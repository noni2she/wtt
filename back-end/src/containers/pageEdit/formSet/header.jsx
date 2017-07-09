import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onEditFormSubmit } from 'actions/editForm';
import PropTypes from 'prop-types';

class HeaderFormSet extends Component {
  constructor(props) {
    super();
    this.onFormChange = this.onFormChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      ...props.block,
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
              name="name"
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
              name="name"
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
