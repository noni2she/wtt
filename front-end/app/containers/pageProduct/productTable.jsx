import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class ProductTable extends Component {
  static propTypes = {
    content: PropTypes.array,
    products: PropTypes.array,
  }
  render() {
    const { products } = this.props;
    let { content } = this.props;

    content = content.filter((item) => {
      return item.key !== 'uuid';
    });

    return (
      <div className="products-table table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="products-table-thead">
            <tr>
              {
                content.map(({ displayedName }, index) => {
                  return (
                    <th key={`product-table-thead-${index}`}>{ displayedName }</th>
                  );
                })
              }
            </tr>
          </thead>
          <tbody className="products-table-tbody">
            {
              products.length > 0 ? (
                products.map((product, index) => {
                  return (
                    <tr key={`product-table-tbody-${index}`}>
                      {
                        content.map(({ key }, itemIndex) => {
                          return (
                            <td key={`product-table-tbody-item-${itemIndex}`}>
                              { product[key] }
                            </td>
                          );
                        })
                      }
                    </tr>
                  );
                })
              ) : (null)
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
