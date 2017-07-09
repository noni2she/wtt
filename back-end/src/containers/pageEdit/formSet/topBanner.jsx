import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onEditFormSubmit } from 'actions/editForm';
import PropTypes from 'prop-types';

class TopBannerFormSet extends Component {
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
  editFieldGenerator() {
    return (Array.apply(null, new Array(10)).map((value, index) => {
      return(
        <div className="form-group" key={`page-edit-form-set-topBanner-${index}`}>
          <h4 className="form-seperate-header">{`圖片 ${index + 1}`}</h4>

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

          <label>{`圖片連結`}</label>

          <input
            className="form-control"
            type="text"
            placeholder="main-image url" 
            name="mainImg"
            value={'image'}
            onChange={this.onFormChange}
          />
        </div>
      )
    }));
  }
  render() {
    return (
      <div className="page-edit-form-set">
        <form className="page-edit-form-set-category">
          {this.editFieldGenerator()}
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

TopBannerFormSet.contextTypes = {
  router: PropTypes.object,
};

TopBannerFormSet.propTypes = {
  onEditFormSubmit: PropTypes.func,
}

export default connect(null, { onEditFormSubmit })(TopBannerFormSet);
