import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onSeriesJSONImport } from 'actions/productDetail';
import { uuid, errorToastr, successToastr } from 'utils/common';
import {
  TOAST_TITLE_IMPORT_MODAL, TOAST_MESSAGE_IMPORT_MODAL_SUCCESS, TOAST_MESSAGE_IMPORT_MODAL_FAILED,
} from 'constants/common';

export class JSONImportModal extends Component {
  static propTypes = {
    categoryKey: PropTypes.string,
    seriesKey: PropTypes.string,
  }

  constructor() {
    super();
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.clearField = this.clearField.bind(this);
    this.state = {
      value: ''
    };
  }

  clearField() {
    // empty textField
    this.setState({
      value: ''
    });
  }

  onChangeHandler({ target }) {
    try {
      const { name, value } = target;

      this.setState({
        [name]: value,
      });
    } catch (error) {
      console.error(error);
    }
  }

  onSubmitHandler() {
    try {
      const { categoryKey, seriesKey } = this.props;
      const regExp = /(\n|\\n|\r|\\r|\r\n|\\r\\n)/g;

      let { value } = this.state;
      let seriesItems;

      // textfield validate
      if (!value) return;

      // replace line break
      value = value.replace(regExp, ' ');
      seriesItems = JSON.parse(value);

      seriesItems = seriesItems.map((seriesItem) => {
        return({
          ...seriesItem,
          uuid: uuid(),
        })
      });

      // create action
      this.props.onSeriesJSONImport({
        categoryKey, seriesKey, seriesItems
      });

      successToastr({
        title: TOAST_TITLE_IMPORT_MODAL,
        message: TOAST_MESSAGE_IMPORT_MODAL_SUCCESS,
      });

    } catch (error) {
      console.error(error);
      errorToastr({
        title: TOAST_TITLE_IMPORT_MODAL,
        message: TOAST_MESSAGE_IMPORT_MODAL_FAILED,
      });
    }
  }

  render() {
    const { value } = this.state;
    return (
      <div className="json-import-modal">
        <h4>Series 資料匯入</h4>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={this.clearField}>import</button>

        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Series 資料匯入</h4>
              </div>
              <div className="modal-body">
                <p className="font-danger">* 僅提供 JSON 格式，其他格式內容可能導致頁面異常</p>
                <p className="font-primary">* 轉檔網站連結 <a href="https://shancarter.github.io/mr-data-converter/" target="blank">https://shancarter.github.io/mr-data-converter</a></p>
                <textarea className="form-control" rows="20" placeholder="please input json data" name="value" onChange={this.onChangeHandler} value={value}></textarea>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={this.onSubmitHandler}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { onSeriesJSONImport })(JSONImportModal);
