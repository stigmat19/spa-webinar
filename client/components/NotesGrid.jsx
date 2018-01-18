import React from 'react';
import FontAwesome from 'react-fontawesome';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import './NotesGrid.less';

const NotesGrid = React.createClass({

  priceFormatter(cell, row) {
    return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
  },

  render() {
    let products = [];

    this.props.notes.map((item, index) =>{
      //console.log(item);
      products.push({
        id: item.itemId,
        name: item.itemName,
        price: item.price,
        quantity: item.quantity
      })
    });

    const selectRow = {
      mode: 'checkbox',  // multi select
      bgColor: '#a7e4bb',
      clickToSelect: true
    };

    const options = {
      paginationSize: 3
    };

    return (
      <div className="mobileTable">
        <BootstrapTable
          data={products}
          striped={true}
          hover={true}
          selectRow={ selectRow }
          options={ options }
          pagination
        >
          <TableHeaderColumn
            dataField="id"
            isKey={true}
            dataAlign="center"
            width='80px'
            dataSort={true}>ID
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="name"
            dataSort={true}

            dataAlign="center">Product Name
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="price"
            dataSort={true}
            dataAlign="center"
            width='180px'
            dataFormat={this.priceFormatter}>Product Price
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="quantity"
            dataAlign="center"
            width='130px'
            dataSort={true}>Quantity
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
});

export default NotesGrid;





//<table className="mobileTable">
//  <tbody>
//  <tr className="head">
//    <td>Id</td>
//    <td>Name</td>
//    <td>Price</td>
//    <td>Quantity</td>
//    <td>Add Item</td>
//  </tr>
//  {this.props.notes.map((item, index) => {
//    return (
//      <tr key={index} onClick={this.activeRow}>
//        <td>{item.itemId}</td>
//        <td>{item.itemName}</td>
//        <td>{item.price}</td>
//        <td>{item.quantity}</td>
//        <td style={{textAlign: 'center'}}><a href="#"><FontAwesome name='shopping-cart'/></a></td>
//      </tr>
//    )
//  })}
//  </tbody>
//</table>
