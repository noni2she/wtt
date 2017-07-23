import React, { Component } from 'react';

export default class JSONImportModal extends Component {

  onSubmitHandler() {
  }

  render() {
    return (
      <div className="json-import-modal">
        <h4>Series 資料匯入</h4>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">import</button>

        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Series 資料匯入</h4>
              </div>
              <div className="modal-body">
                <p className="font-danger">* 僅提供 JSON 格式，其他格式內容可能導致頁面異常</p>
                <textarea className="form-control" rows="20" placeholder="please input json data"></textarea>
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