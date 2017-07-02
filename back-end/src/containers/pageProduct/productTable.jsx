import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { uuid } from '../../utils/common';
import {
  ROW_KEY_UUID, thStyle, tdStyle,
  selectRowProp, cellEditProp,
} from '../../constants/productTable';
import { onCellEdit, onDeleteRow, onAddRow } from '../../actions/productDetail';

class ProductTable extends Component {

  constructor() {
    super();
    this.onCellEdit = this.onCellEdit.bind(this);
    this.onDeleteRow = this.onDeleteRow.bind(this);
    this.onAddRow = this.onAddRow.bind(this);
  }

  autoValue() {
    return uuid();
  }

  // handling editing, insert and delete row by remote store
  remote(remoteObj) {
    remoteObj.cellEdit = true;
    remoteObj.insertRow = true;
    remoteObj.dropRow = true;
    return remoteObj;
  }
  onCellEdit(row, cellName, cellValue) {
    const { uuid } = row;
    const { categoryKey, seriesKey } = this.props;

    this.props.onCellEdit({
      categoryKey, seriesKey, uuid,
      cellName, cellValue,
    });
  }
  onDeleteRow(rowKeys) {
    console.log('onDeleteRow');
  }
  onAddRow(argc) {
    console.log('onAddRow');
  }

  render() {
    const { content, products } = this.props;

    // cosutomized options for productTable
    const options = {
      onCellEdit: this.onCellEdit,
      onDeleteRow: this.onDeleteRow,
      onAddRow: this.onAddRow,
    }

    return (
      <div className="products-table">
        <BootstrapTable
          data={ products }
          hover={ true }
          cellEdit={ cellEditProp }
          insertRow={ true }
          deleteRow={ true }
          options={ options }
          selectRow={ selectRowProp }
        >
          {
            content.map((row, index) => {
              return (row.key === ROW_KEY_UUID ? (
                <TableHeaderColumn
                  key={ `products-table-column-${index}` }
                  hiddenOnInsert={ true }
                  autoValue={ this.autoValue }
                  isKey={ true }
                  dataField={ row.key }
                  thStyle={ thStyle }
                  dataAlign="center"
                >
                  { row.displayedName }
                </TableHeaderColumn>

              ) : (
                <TableHeaderColumn
                  key={ `products-table-column-${index}` }
                  dataField={ row.key }
                  thStyle={ thStyle }
                  tdStyle={ tdStyle }
                  dataAlign="center"
                >
                  { row.displayedName }
                </TableHeaderColumn>
              ));
            })
          }
        </BootstrapTable>
      </div>
    );
  }
}

ProductTable.propTypes = {
  categoryKey: PropTypes.string,
  seriesKey: PropTypes.string,
  onCellEdit: PropTypes.func,
  onDeleteRow: PropTypes.func,
  onAddRow: PropTypes.func,
};

export default connect(null, { onCellEdit, onDeleteRow, onAddRow })(ProductTable);
