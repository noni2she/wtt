import React, { Component } from 'react';
import {
  PROD_DETAIL_TALBE_COLUMN_TITLE_MAX,
  PROD_DETAIL_TALBE_CELL_PER_ROW,
  PROD_DETAIL_DESCRIP_MAX,
} from 'constants/common';
import { productsDetailDefaultState } from 'constants/initialState';

class SeriesDetailFormSet extends Component {
  constructor() {
    super();
    this.onFormChange = this.onFormChange.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.state = { ...productsDetailDefaultState };
  }

  // generate descriptions edit field for series. Max counts is 10.
  descriptionGenerator(descriptions) {
    return (Array.apply(null, new Array(PROD_DETAIL_DESCRIP_MAX)).map((value, index) => {
      return(
        <div className="form-group" key={`page-edit-form-set-series-decription-${index}`}>
          <label>{`Description ${index + 1}`}</label>
          <textarea
            className="form-control"
            rows="2"
            placeholder="Please enter the description about series." 
            name={'descriptions'}
            onChange={this.onFormChange}
            data-index={index}
            value={descriptions[index]}
          >
          </textarea>
        </div>
      )
    }));
  }

   // Generate two row. Each row with 3 input of table title and total got 6 titles fields.
  tableTitleGenerator(tableTitles) {

    const rowCount = PROD_DETAIL_TALBE_COLUMN_TITLE_MAX / PROD_DETAIL_TALBE_CELL_PER_ROW;
    return(Array.apply(null, new Array(rowCount)).map((value, index) => {
      return(
        <div className="form-inline form-set-inline-wrapper" key={`page-edit-form-set-series-inline-${index}`}>
          <div className="form-group form-set-inline-column">
            <label>{`標題 ${index * PROD_DETAIL_TALBE_CELL_PER_ROW + 1}`}</label>
            <input
              data-index={index * PROD_DETAIL_TALBE_CELL_PER_ROW}
              type="text"
              name={'tableTitles'}
              value={tableTitles[index * PROD_DETAIL_TALBE_CELL_PER_ROW] ? tableTitles[index * PROD_DETAIL_TALBE_CELL_PER_ROW] : ''}
              onChange={this.onFormChange}
              className="form-control"
              placeholder="Table title"
            />
          </div>
          <div className="form-group form-set-inline-column">
            <label>{`標題 ${index * PROD_DETAIL_TALBE_CELL_PER_ROW + 2}`}</label>
            <input
              data-index={index * PROD_DETAIL_TALBE_CELL_PER_ROW + 1}
              type="text"
              name={'tableTitles'}
              value={tableTitles[index * PROD_DETAIL_TALBE_CELL_PER_ROW +1] ? tableTitles[index * PROD_DETAIL_TALBE_CELL_PER_ROW +1] : ''}
              onChange={this.onFormChange}
              className="form-control"
              placeholder="Table title"
            />
          </div>

          <div className="form-group form-set-inline-column">
            <label>{`標題 ${index * PROD_DETAIL_TALBE_CELL_PER_ROW + 3}`}</label>
            <input
              data-index={index * PROD_DETAIL_TALBE_CELL_PER_ROW + 2}
              type="text"
              name={'tableTitles'}
              value={tableTitles[index * PROD_DETAIL_TALBE_CELL_PER_ROW +2] ? tableTitles[index * PROD_DETAIL_TALBE_CELL_PER_ROW +2] : ''}
              onChange={this.onFormChange}
              className="form-control"
              placeholder="Table title"
            />
          </div>
        </div>
      );
    }));
  }

  // handler for checkbox
  onClickHandler({target}) {
    this.setState({
      [target.name]: target.checked,
    });
  }

  onFormChange({ target }) {
    try {
      let value = target.value;

      // DOM was present by an array
      if (target.hasAttribute('data-index')) {
        let index = parseInt(target.getAttribute('data-index'), 10);

        // prevent from index of array out of range
        if (target.name === 'tableTitles') {
          if (index < 0 || index > PROD_DETAIL_TALBE_COLUMN_TITLE_MAX ) throw Error;
        }
        if (target.name === 'descriptions') {
          if (index < 0 || index > PROD_DETAIL_DESCRIP_MAX ) throw Error;
        }

        let array =  [...this.state[target.name]];
        array[index] = target.value
        value = array;
      }
      this.setState({
        [target.name]: value,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const {
      displayed, name, mainImg,
      subImg, descriptions, tableTitles
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
                onClick={this.onClickHandler} 
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
              value={mainImg}
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
              value={subImg}
              onChange={this.onFormChange}
            />
          </div>

          <h4 className="form-seperate-header">表格標題</h4>
          {this.tableTitleGenerator(tableTitles)}
          
          <h4 className="form-seperate-header">Feature</h4>
          {this.descriptionGenerator(descriptions)}

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
