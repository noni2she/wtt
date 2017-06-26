import React, { Component } from 'react';
import NavBar from '../../components/common/navBar.jsx';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

// It's a data format example.
function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

class PageProduct extends Component {
  render() {

    // products will be presented by react-bootstrap-table
    const products = Array.apply(null, new Array(30)).map(() => {
      return ({
        id: 1,
        name: "Item name 1\nItem name 1\nasdasda sdasdasda sdasdas das",
        price: 100
      })
    });
    const headerStyle = {
      backgroundColor: '#444',
      color: '#eee',
      textAlign: 'center',
    }
    const nameStyle = {
      whiteSpace: 'normal',
    };
    return (
      <div className="container-with-nav-bar" >
        <NavBar />

        <div id="page-product" className="container">
          <div className="products-contents row ">
            <div className="col-lg-5">
              <div className="products-main-image">
              </div>
            </div>

            <div className="products-information col-lg-7">
              <div className="products-description">
                <h4>Subheading</h4>
                <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
                <h4>Subheading</h4>
                <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
                <h4>Subheading</h4>
                <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
              </div>
              <div className="products-sub-image"></div>
            </div>

          </div>
          <div className="products-slider"></div>

          <div className="products-table">
            <BootstrapTable 
              data={products}
              hover={true}
              tableStyle={{ background: '#fff' }}
            >
              <TableHeaderColumn dataField="id" thStyle={headerStyle} isKey={true} dataAlign="center" >Product ID</TableHeaderColumn>
              <TableHeaderColumn dataField="name" thStyle={headerStyle} tdStyle={nameStyle}>Product Name</TableHeaderColumn>
              <TableHeaderColumn dataField="price" thStyle={headerStyle} dataFormat={priceFormatter} >Product Price</TableHeaderColumn>
            </BootstrapTable>
          
          </div>

          <div className="empty"></div>
        </div>
      </div>
    );
  }
}

export default PageProduct;
