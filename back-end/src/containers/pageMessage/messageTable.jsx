import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class MessageTable extends Component {
  render() {
    const data = this.props.messageItems;
    return (
      <div className="message-table">
        <BootstrapTable data={data} striped={true} hover={true}>
            <TableHeaderColumn dataField="sender" isKey={true} dataAlign="center">Name</TableHeaderColumn>
            <TableHeaderColumn dataField="receiverEmail" >Email</TableHeaderColumn>
            <TableHeaderColumn dataField="content">Message</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default MessageTable;
