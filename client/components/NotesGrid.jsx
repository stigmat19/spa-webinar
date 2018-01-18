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
                <td>{item.title}</td>
                <td>{item.title}</td>
                <td>{item.title}</td>
                <td>{item.title}</td>
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


//onDelete={this.props.onNoteDelete.bind(null, note)}
