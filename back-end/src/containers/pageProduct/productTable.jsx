import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class ProductTable extends Component {

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
    
    return (
      <div className="products-table">
      <BootstrapTable 
        data={products}
        hover={true}
      >
        {
          content.map((row, index) => {
            return(
              <TableHeaderColumn
                key={`products-table-column-${index}`}
                isKey={index===0}
                dataField={row.key}
                thStyle={headerStyle}
                tdStyle={tdStyle}
                dataAlign="center"
              >
                {row.displayedName}
              </TableHeaderColumn>
            );

          })
        }
      </BootstrapTable>
      </div>
    );
  }
}

export default ProductTable;
