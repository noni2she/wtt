import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { tableOptions, tdStyle, thStyle, selectRow} from 'constants/messageTable'
import { onDeleteRow } from 'actions/messageItems';
class MessageTable extends Component {
  constructor() {
    super();
    this.onDeleteRow = this.onDeleteRow.bind(this);
  }

  onDeleteRow(rowsKey) {
    // rowsKey are the uuids of the rows which were deleted
    this.props.onDeleteRow({
      rowsKey
    });
  }
  render() {
    const data = this.props.messageItems;
    const options = {
      ...tableOptions,
      onDeleteRow: this.onDeleteRow,
    }

    return (
      <div className="message-table">
        <BootstrapTable 
          data={ data }
          options={ options }
          selectRow={ selectRow }
          hover
          pagination
          deleteRow
        >
          <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" columnClassName="col-lg-2" thStyle={thStyle}>ID</TableHeaderColumn>
          <TableHeaderColumn dataField="sender" dataAlign="center" columnClassName="col-lg-2" thStyle={thStyle}>Name</TableHeaderColumn>
          <TableHeaderColumn dataField="receiverEmail" dataAlign="center" columnClassName="col-lg-2" thStyle={thStyle}>Email</TableHeaderColumn>
          <TableHeaderColumn dataField="content" dataAlign="center" tdStyle={ tdStyle } columnClassName="col-lg-6" thStyle={thStyle}>Message</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default connect(null, { onDeleteRow })(MessageTable);
