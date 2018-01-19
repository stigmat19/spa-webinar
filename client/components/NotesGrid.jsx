import React from 'react';
import FontAwesome from 'react-fontawesome';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import './NotesGrid.less';

const NotesGrid = React.createClass({

  priceFormatter(cell, row) {
    return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
  },

  handleRowSelect(row, isSelected, e) {
    console.log('row',row);
    this.setState({
      _id       : row._id,
      quantity  : row.quantity
    })
  },

  buyItem(){
    const newMobileItem = {
      _id: this.state._id,
      quantity: this.state.quantity-1
    };

    this.props.onNoteUpdate(newMobileItem);
  },

  render() {
    let products = [];
    //console.log('state',this.state);
    this.props.notes.map((item, index) =>{
      //console.log(item);
      products.push({
        _id: item.id,
        id: item.itemId,
        name: item.itemName,
        price: item.price,
        quantity: item.quantity
      })
    });

    const selectRow = {
      mode: 'radio',  // multi select
      bgColor: '#a7e4bb',
      clickToSelect: true,
      onSelect: this.handleRowSelect
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
        <button className="Buy__button" onClick={this.buyItem}>Buy</button>
      </div>
    );
  }
});

export default NotesGrid;
