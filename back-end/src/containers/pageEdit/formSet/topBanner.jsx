import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onEditFormSubmit } from 'actions/editForm';
import PropTypes from 'prop-types';
import { imgItemDefaultGenerator } from 'constants/initialState';
import { FORM_SET_TOP_BANNER } from 'constants/common';

class TopBannerFormSet extends Component {
  constructor(props) {
    super();
    this.onFormChange = this.onFormChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // if the length of description is less than 10, fill it up to 10.
    const insufficientCount = 10 - Object.keys(props.imgItems).length;
    const imgItems = [ ...props.imgItems ];
    for (let index = 0 ; index < insufficientCount ; index++) {
      imgItems.push(
        imgItemDefaultGenerator(false)
      );
    }
    this.state = {
      ...props, imgItems,
    };
  }

  onFormChange({ target }) {
    try {
      const { name, value, checked } = target;
      const index = parseInt(target.getAttribute('data-index'), 10);

      let imgItems = [
        ...this.state.imgItems
      ];

      if (name === 'mainImg') {

        // imgItem
        imgItems[index].imgUrl = value;
      } else if (name === 'displayed') {

        // checkbox
        imgItems[index].displayed = checked;
      }
      this.setState({
        imgItems
      });
    } catch (error) {
      console.error(error);
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const { locales } = this.props;

    this.props.onEditFormSubmit(
      locales, FORM_SET_TOP_BANNER,
      { ...this.state }
    );

    // navigate to previous page
    this.context.router.goBack();
  }
  editFieldGenerator(imgItems) {
    if (!imgItems) return null;

    return (Array.apply(null, new Array(10)).map((value, index) => {
      return(
        <div className="form-group" key={`page-edit-form-set-topBanner-${index}`}>
          <h4 className="form-seperate-header">{`圖片 ${index + 1}`}</h4>

          <div className="form-group checkbox">
            <label>
              <input
                type="checkbox" 
                name="displayed"
                data-index={index}
                onChange={this.onFormChange}
                checked={imgItems[index] ? imgItems[index].displayed : ''}
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
            data-index={index}
            value={imgItems[index] ? imgItems[index].imgUrl : ''}
            onChange={this.onFormChange}
          />
        </div>
      )
    }));
  }
  render() {
    const { imgItems } = this.state;
    return (
      <div className="page-edit-form-set">
        <form className="page-edit-form-set-category">
          {this.editFieldGenerator(imgItems)}
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

TopBannerFormSet.contextTypes = {
  router: PropTypes.object,
};

TopBannerFormSet.propTypes = {
  onEditFormSubmit: PropTypes.func,
}

export default connect(null, { onEditFormSubmit })(TopBannerFormSet);
