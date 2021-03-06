import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onEditFormSubmit } from 'actions/editForm';
import PropTypes from 'prop-types';
import { FORM_SET_ABOUT } from 'constants/common';

class AboutFormSet extends Component {
  constructor(props) {
    super();
    this.onFormChange = this.onFormChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      ...props.about,
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
    const { locales } = this.props;

    this.props.onEditFormSubmit(
      locales, FORM_SET_ABOUT,
      { ...this.state }
    );

    // navigate to previous page
    this.context.router.goBack();
  }

  render() {
    const {
      header, description
    } = this.state;
    return (
      <div className="page-edit-form-set">
        <form className="page-edit-form-set-series">
          <h4 className="form-seperate-header">關於</h4>
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
            <label>內容</label>
            <textarea
              className="form-control"
              rows="10"
              placeholder="Please enter the description about series." 
              name="description"
              value={description}
              onChange={this.onFormChange}
            >
            </textarea>
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

AboutFormSet.contextTypes = {
  router: PropTypes.object,
};

AboutFormSet.propTypes = {
  onEditFormSubmit: PropTypes.func,
}

export default connect(null, { onEditFormSubmit })(AboutFormSet);
