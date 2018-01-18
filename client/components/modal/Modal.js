import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


import './Modal.less';

const Modal = React.createClass({

  // activeRow(e) {
  //   let row = e.currentTarget;
  //   if (row.getAttribute('class') === 'active'){
  //     row.setAttribute('class', '');
  //   }
  //   else{
  //     row.setAttribute('class', 'active');
  //   }
  // },

  render() {
    return (
      <div className="Modal__wrapper">
        <div className="Modal__form">
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Count item"/>
        </div>
      </div>
    );
  }
});

export default Modal;


//onDelete={this.props.onNoteDelete.bind(null, note)}
