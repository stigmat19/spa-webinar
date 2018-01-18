import React from 'react';
import FontAwesome from 'react-fontawesome';


import './NotesGrid.less';

const NotesGrid = React.createClass({

  activeRow(e) {
    let row = e.currentTarget;
    if (row.getAttribute('class') === 'active'){
      row.setAttribute('class', '');
    }
    else{
      row.setAttribute('class', 'active');
    }
  },

  products: [{
    id: 1,
    name: "Item name 1",
    price: 100
  }, {
    id: 2,
    name: "Item name 2",
    price: 100
  },],
// It's a data format example.

  priceFormatter(cell, row) {
    return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
  },

  render() {
    return (
      <div>
        <table className="mobileTable">
          <tbody>
          <tr className="head">
            <td>Id</td>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Add Item</td>
          </tr>
          {this.props.notes.map((item, index) => {
            return (
              <tr key={index} onClick={this.activeRow}>
                <td>{item.itemId}</td>
                <td>{item.itemName}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td style={{textAlign: 'center'}}><a href="#"><FontAwesome name='shopping-cart'/></a></td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    );
  }
});

export default NotesGrid;


//<BootstrapTable data={this.products} striped={true} hover={true}>
//<TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
//<TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
//<TableHeaderColumn dataField="price" dataFormat={this.priceFormatter}>Product Price</TableHeaderColumn>
//</BootstrapTable>
