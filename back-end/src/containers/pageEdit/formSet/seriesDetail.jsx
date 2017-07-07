import React, { Component } from 'react';
import {
  PROD_DETAIL_TALBE_COLUMN_TITLE_MAX,
  PROD_DETAIL_TALBE_CELL_PER_ROW,
  PROD_DETAIL_DESCRIP_MAX,
} from 'constants/common';
import { productsDetailDefaultState } from 'constants/initialState';

class SeriesDetailFormSet extends Component {
  constructor(props) {
    super();
    this.onFormChange = this.onFormChange.bind(this);

    // data of product detail
    const content = props.seriesItem.content.filter((value, index) => {
      // remove uneditable field 'uuid'
      return value.key !== 'uuid';
    });
    this.state = { ...productsDetailDefaultState, ...props.seriesItem, content };
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
      const { name, value } = target.name;

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

  render() {
    const {
      displayed, name, mainImg,
      subImg, description, content
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
            <button className="btn btn-primary pull-left form-set-footer-save">儲存</button>
            <button className="btn btn-danger pull-right">刪除</button>
          </div>
        </form>
      </div>
    );
  }
}
export default SeriesDetailFormSet;
