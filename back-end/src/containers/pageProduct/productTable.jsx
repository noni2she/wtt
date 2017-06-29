import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import uuidv1 from 'uuid/v1';

class ProductTable extends Component {

  constructor() {
    super();
    this.onAfterSaveCell = this.onAfterSaveCell.bind(this);
    this.autoValue = this.autoValue.bind(this);
    this.handleDeletedRow = this.handleDeletedRow.bind(this);
  }

  autoValue() {
    return uuidv1();
  }

  onAfterSaveCell(products, index) {
    // after save 
  }
  handleDeletedRow(rowKeys) {
    // it show the row key of what we delete.
  }
  render() {
    const { content, products } = this.props;
    const headerStyle = {
      backgroundColor: '#444',
      color: '#eee',
      textAlign: 'center',
    }
    const tdStyle = {
      whiteSpace: 'normal',
    };
    const cellEditProp = {
      mode: 'click',
      blurToSave: true,
      afterSaveCell: this.onAfterSaveCell,
    };
    const selectRowProp = {
      mode: 'checkbox'
    };
    const options = {
      afterDeleteRow: this.handleDeletedRow
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
            return (row.key === 'uuid' ? (
              <TableHeaderColumn
                key={ `products-table-column-${index}` }
                hiddenOnInsert={ true }
                autoValue={ this.autoValue }
                isKey={ true }
                dataField={ row.key }
                thStyle={ headerStyle }
                tdStyle={ undefined }
                dataAlign="center"
              >
                { row.displayedName }
              </TableHeaderColumn>

            ) : (
              <TableHeaderColumn
                key={ `products-table-column-${index}` }
                dataField={ row.key }
                thStyle={ headerStyle }
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

export default ProductTable;
