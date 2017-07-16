import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { onEditFormSubmit, onDeleteFormSubmit } from 'actions/editForm';
import { onCategoryDelete } from 'actions/productDetail';
import { FORM_SET_CATEGORY, DELETE_PRODUCT_CATEGORY } from 'constants/common';

class CategoryFormSet extends Component {
  constructor(props) {
    super();
    const { categoryItem } = props;

    this.onFormChange = this.onFormChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.state = {
      ...categoryItem
    };
  }

  onFormChange({ target }) {
    try {
      const { name, value } = target;
      let imageItem;
      let newValue = value;

      if (name === 'mainImg') {
        // imgItem
        imageItem = { ...this.state[name] }
        imageItem.imgUrl = target.value;
        newValue = imageItem;
      }
       else if (name === 'displayed') {
        // checkbox
        newValue = target.checked;
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
    const { locales, categoryIndex } = this.props;

    this.props.onEditFormSubmit(
      locales, FORM_SET_CATEGORY,
      { ...this.state, categoryIndex }
    );

    // navigate to previous page
    this.context.router.goBack();
  }
  onDelete(event) {
    event.preventDefault();
    const { locales, categoryIndex, categoryKey } = this.props;

    this.props.onDeleteFormSubmit(
      locales, DELETE_PRODUCT_CATEGORY, {
        categoryIndex,
      }
    );

    // delete attribute in product Detail
    this.props.onCategoryDelete({
      categoryKey,
    });

    this.context.router.replace('/');
  }

  render() {
    const { name, mainImg, key, displayed } = this.state;
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
            <label>key</label>
            <input
              className="form-control"
              type="text"
              value={key}
              disabled={true}
            />
          </div>
          <div className="form-group">
            <label>標題</label>
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="name"
              value={name}
              onChange={this.onFormChange}
            />
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

CategoryFormSet.contextTypes = {
  router: PropTypes.object,
};

CategoryFormSet.propTypes = {
  onEditFormSubmit: PropTypes.func,
}

export default connect(null, { onEditFormSubmit, onDeleteFormSubmit, onCategoryDelete })(CategoryFormSet);
