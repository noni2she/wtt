import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { options, tdStyle, thStyle } from 'constants/messageTable'

class MessageTable extends Component {
  render() {
    const data = this.props.messageItems;
    return (
      <div className="message-table">
        <BootstrapTable 
          data={ data }
          striped={true}
          hover={true}
          options={ options }
          pagination
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

export default MessageTable;
