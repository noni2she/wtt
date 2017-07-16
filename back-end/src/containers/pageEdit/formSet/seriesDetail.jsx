import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  PROD_DETAIL_TALBE_COLUMN_TITLE_MAX,
  PROD_DETAIL_TALBE_CELL_PER_ROW,
  PROD_DETAIL_DESCRIP_MAX,
  PRODUCTS_DESCRIPT_COUNT,
} from 'constants/common';
import { onEditFormSubmit } from 'actions/editForm';
import PropTypes from 'prop-types';
import { FORM_SET_SERIES_DETAIL } from 'constants/common';

class SeriesDetailFormSet extends Component {
  constructor(props) {
    super();
    this.onFormChange = this.onFormChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // data of product detail
    const content = props.seriesItem.content.filter((value, index) => {
      // remove uneditable field 'uuid'
      return value.key !== 'uuid';
    });
    // if the length of description is less than 10, fill it up to 10.
    let insufficientCount = PRODUCTS_DESCRIPT_COUNT - Object.keys(props.seriesItem.description).length;
    let description = [...props.seriesItem.description]
    for (let index =0 ; index < insufficientCount ; index++) {
      description.push({
        title:'',
        content: '',
      });
    }

    this.state = {
      ...props.seriesItem,
      content,
      description,
    };
  }

  // generate description edit field for series. Max counts is 10.
  descriptionGenerator(description) {
    return (Array.apply(null, new Array(PROD_DETAIL_DESCRIP_MAX)).map((value, index) => {
      return(
        <div className="form-group" key={`page-edit-form-set-series-decription-${index}`}>
          <label>{`Description ${index + 1}`}</label>
          <input
            className="form-control"
            type="text"
            placeholder="Title"
            name="description"
            data-index={index}
            data-key={'title'}
            onChange={this.onFormChange}
            value={description[index] ? description[index].title : ''}
          />
          <textarea
            className="form-control"
            rows="2"
            placeholder="Please enter the description about series." 
            name={'description'}
            data-index={index}
            data-key={'content'}
            onChange={this.onFormChange}
            value={description[index] ? description[index].content : ''}
          >
          </textarea>
        </div>
      )
    }));
  }

   // Generate two row. Each row with 3 input of table title and total got 6 titles fields.
  tableTitleGenerator(content) {

    const rowCount = PROD_DETAIL_TALBE_COLUMN_TITLE_MAX / PROD_DETAIL_TALBE_CELL_PER_ROW;
    return(Array.apply(null, new Array(rowCount)).map((value, index) => {
      return(
        <div className="form-inline form-set-inline-wrapper" key={`page-edit-form-set-series-inline-${index}`}>
          <div className="form-group form-set-inline-column">
            <label>{`標題 ${index * PROD_DETAIL_TALBE_CELL_PER_ROW + 1}`}</label>
            <input
              data-index={index * PROD_DETAIL_TALBE_CELL_PER_ROW}
              data-key={'displayedName'}
              type="text"
              name={'content'}
              value={content[index * PROD_DETAIL_TALBE_CELL_PER_ROW] ? content[index * PROD_DETAIL_TALBE_CELL_PER_ROW].displayedName : ''}
              onChange={this.onFormChange}
              className="form-control"
              placeholder="Table title"
            />
          </div>
          <div className="form-group form-set-inline-column">
            <label>{`標題 ${index * PROD_DETAIL_TALBE_CELL_PER_ROW + 2}`}</label>
            <input
              data-index={index * PROD_DETAIL_TALBE_CELL_PER_ROW + 1}
              data-key={'displayedName'}
              type="text"
              name={'content'}
              value={content[index * PROD_DETAIL_TALBE_CELL_PER_ROW +1] ? content[index * PROD_DETAIL_TALBE_CELL_PER_ROW +1].displayedName : ''}
              onChange={this.onFormChange}
              className="form-control"
              placeholder="Table title"
            />
          </div>

          <div className="form-group form-set-inline-column">
            <label>{`標題 ${index * PROD_DETAIL_TALBE_CELL_PER_ROW + 3}`}</label>
            <input
              data-index={index * PROD_DETAIL_TALBE_CELL_PER_ROW + 2}
              data-key={'displayedName'}
              type="text"
              name={'content'}
              value={content[index * PROD_DETAIL_TALBE_CELL_PER_ROW +2] ? content[index * PROD_DETAIL_TALBE_CELL_PER_ROW +2].displayedName : ''}
              onChange={this.onFormChange}
              className="form-control"
              placeholder="Table title"
            />
          </div>
        </div>
      );
    }));
  }

  onFormChange({ target }) {
    try {
      const { name, value } = target;

      let array, index, imageItem;
      let newValue = value;

      if (name === 'content' || name === 'description') {
        // content and description object

        index = parseInt(target.getAttribute('data-index'), 10);

        // prevent from index of array out of range
        if (name === 'content') {
          if (index < 0 || index > PROD_DETAIL_TALBE_COLUMN_TITLE_MAX ) throw Error;
        }
        if (name === 'description') {
          if (index < 0 || index > PROD_DETAIL_DESCRIP_MAX ) throw Error;
        }

        array =  [...this.state[target.name]];
        array[index][target.getAttribute('data-key')] = target.value;
        newValue = array;
      } else if (target.name === 'mainImg' || target.name === 'subImg') {
        // imgItem

        imageItem = {...this.state[target.name]}
        imageItem.imgUrl = target.value;
        newValue = imageItem;

      } else if (target.name === 'displayed') {
        // checkbox

        newValue = target.checked;
      }

      // value is attribute of seriesItem
      this.setState({
        [target.name]: newValue,
      });
    } catch (error) {
      console.error(error);
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const {
      locales, onEditFormSubmit, categoryItemsIndex, seriesItemsIndex,
      seriesItem,
    } = this.props;

    // content should contain original uuid object
    let contentWithUUID = [...this.state.content];
    for (let index =0 ; index < seriesItem.content.length; index++) {
      if (seriesItem.content[index].key === 'uuid') {
        contentWithUUID.push(seriesItem.content[index]);
        break;
      }
    }

    onEditFormSubmit(locales, FORM_SET_SERIES_DETAIL, {
      ...this.state, categoryItemsIndex, seriesItemsIndex, content: contentWithUUID
    });

    // navigate to previous page
    this.context.router.goBack();
  }

  render() {
    const {
      displayed, name, key, shortName, mainImg,
      subImg, description, content,
    } = this.state;
    return (
      <div className="page-edit-form-set">
        <form className="page-edit-form-set-series">
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
              id="form-set-series-description-name"
              className="form-control"
              type="text"
              placeholder="Title"
              name="name"
              value={name}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label>顯示名稱</label>
            <input
              id="form-set-series-description-shortName"
              className="form-control"
              type="text"
              placeholder="Title"
              name="shortName"
              value={shortName}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label >主要圖片</label>
            <input
              id="form-set-series-main-img"
              className="form-control"
              type="text"
              placeholder="main-image url" 
              name="mainImg"
              value={mainImg.imgUrl}
              onChange={this.onFormChange}
            />
          </div>
          <div className="form-group">
            <label >次要圖片</label>
            <input
              id="form-set-series-sub-img"
              className="form-control"
              type="text"
              placeholder="sub-image url" 
              name="subImg"
              value={subImg.imgUrl}
              onChange={this.onFormChange}
            />
          </div>

          <h4 className="form-seperate-header">表格標題</h4>
          {this.tableTitleGenerator(content)}
          
          <h4 className="form-seperate-header">Feature</h4>
          {this.descriptionGenerator(description)}

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

SeriesDetailFormSet.contextTypes = {
  router: PropTypes.object,
};

SeriesDetailFormSet.propTypes = {
  onEditFormSubmit: PropTypes.func,
}

export default connect(null, { onEditFormSubmit })(SeriesDetailFormSet);
