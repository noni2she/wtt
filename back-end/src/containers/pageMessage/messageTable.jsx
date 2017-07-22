import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { tableOptions, tdStyle, thStyle, selectRow, MESSAGE_DISPLAY_MAX_COUNT } from 'constants/messageTable'
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
  generateMessageItemsData(messageItems) {
    try {
      /*
       * 1. sort by time
       * 2. the message count less than 1000
       * 3. transfer timestamps to human reabable
       */
      let timestamps, date;
      let filterdMessageItems = [
        ...messageItems
      ];

      // 1.sort time by timestamps
      filterdMessageItems = filterdMessageItems.sort((a,b) => {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.timestamps) - new Date(a.timestamps);
      });

      // 2. less than 1000
      if (filterdMessageItems.length > MESSAGE_DISPLAY_MAX_COUNT) {
        filterdMessageItems = filterdMessageItems.slice(0, MESSAGE_DISPLAY_MAX_COUNT);
      }

      // 3.render timestamps to time format which is human-readable
      filterdMessageItems = filterdMessageItems.map((messageItem) => {
        date = new Date(messageItem.timestamps);
        timestamps = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
        
        return {
          ...messageItem,
          timestamps,
        }
      });

      return(filterdMessageItems);
    } catch(error) {
      console.error(error);
      return [];
    }
  }
  render() {
    const data = this.generateMessageItemsData(this.props.messageItems);
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
          <TableHeaderColumn dataField="id" isKey={true} hidden={ process.env.NODE_ENV !== 'development' } dataAlign="center" columnClassName="col-lg-2" thStyle={thStyle}>ID</TableHeaderColumn>
          <TableHeaderColumn dataField="timestamps" dataAlign="center" columnClassName="col-lg-2" thStyle={thStyle}>Time</TableHeaderColumn>
          <TableHeaderColumn dataField="sender" dataAlign="center" columnClassName="col-lg-2" thStyle={thStyle}>Name</TableHeaderColumn>
          <TableHeaderColumn dataField="receiverEmail" dataAlign="center" columnClassName="col-lg-2" thStyle={thStyle}>Email</TableHeaderColumn>
          <TableHeaderColumn dataField="content" dataAlign="center" tdStyle={ tdStyle } columnClassName="col-lg-6" thStyle={thStyle}>Message</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default connect(null, { onDeleteRow })(MessageTable);
