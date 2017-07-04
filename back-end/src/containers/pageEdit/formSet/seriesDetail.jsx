import React, { Component } from 'react';

class SeriesDetailFormSet extends Component {

  descriptionGenerator() {
    return (Array.apply(null, new Array(10)).map((value, index) => {
      return(
        <div className="form-group" key={`page-edit-form-set-series-decription-${index}`}>
          <label>{`Description ${index + 1}`}</label>
          <textarea
            className="form-control"
            rows="2"
            placeholder="Please enter the description about series." 
          >
          </textarea>
        </div>
      )
    }));
  }
  tableTitleGenerator() {
    return(Array.apply(null, new Array(2)).map((value, index) => {
      return(
        <div className="form-inline form-set-inline-wrapper" key={`page-edit-form-set-series-inline-${index}`}>
          <div className="form-group form-set-inline-column">
            <label>{`標題 ${index * 3 + 1}`}</label>
            <input type="email" className="form-control " id="exampleInputEmail3" placeholder="Email" />
          </div>
          <div className="form-group form-set-inline-column">
            <label>{`標題 ${index * 3 + 2}`}</label>
            <input type="password" className="form-control " id="exampleInputPassword3" placeholder="Password" />
          </div>

          <div className="form-group form-set-inline-column">
            <label>{`標題 ${index * 3 + 3}`}</label>
            <input type="password" className="form-control " id="exampleInputPassword3" placeholder="Password" />
          </div>
        </div>
      );
    }));
  }
  render() {
    return (
      <div className="page-edit-form-set">
        <form className="page-edit-form-set-series">

          <h4 className="form-seperate-header">內容</h4>
          <div className="form-group checkbox">
            <label>
              <input type="checkbox" /> Displayed
            </label>
          </div>
          <div className="form-group">
            <label>標題</label>
            <input
              id="form-set-series-description-name"
              className="form-control"
              type="text"
              placeholder="Title" 
            />
          </div>
          <div className="form-group">
            <label >主要圖片</label>
            <input
              id="form-set-series-main-img"
              className="form-control"
              type="text"
              placeholder="main-image url" 
            />
          </div>
          <div className="form-group">
            <label >次要圖片</label>
            <input
              id="form-set-series-sub-img"
              className="form-control"
              type="text"
              placeholder="sub-image url" 
            />
          </div>

          <h4 className="form-seperate-header">表格標題</h4>
          {this.tableTitleGenerator()}
          
          <h4 className="form-seperate-header">Feature</h4>
          {this.descriptionGenerator()}

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