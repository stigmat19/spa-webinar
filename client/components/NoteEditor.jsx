import React from 'react';

import './NoteEditor.less';

const NoteEditor = React.createClass({
  getInitialState() {
    return {
      itemId: '',
      itemName: '',
      price: '',
      quantity: ''
    };
  },

  handleTextChange(event) {
    if(isNaN(parseInt(event.target.value))){
      event.target.setAttribute('class', 'NoteEditor__title success');
    }
    else{
      event.target.setAttribute('class', 'NoteEditor__title error ');
    }
    this.setState({itemName: event.target.value});
  },

  handleTitleChange(event) {
    if(isNaN(parseInt(event.target.value))){
      event.target.setAttribute('class', 'NoteEditor__title error');
    }
    else{
      event.target.setAttribute('class', 'NoteEditor__title success');
    }
    this.setState({itemId: event.target.value});
  },

  handlePriceChange(event) {
    if(isNaN(parseInt(event.target.value))){
      event.target.setAttribute('class', 'NoteEditor__title error');
    }
    else{
      event.target.setAttribute('class', 'NoteEditor__title success');
    }
    this.setState({price: event.target.value});
  },

  handleQuantityChange(event) {
    if(isNaN(parseInt(event.target.value))){
      event.target.setAttribute('class', 'NoteEditor__title error');
    }
    else{
      event.target.setAttribute('class', 'NoteEditor__title success');
    }
    this.setState({quantity: event.target.value});
  },

  handleColorChange(color) {
    this.setState({color});
  },

  handleNoteAdd() {
    const newNote = {
      itemId: this.state.itemId,
      itemName: this.state.itemName,
      price: this.state.price,
      quantity: this.state.quantity
    };

    this.props.onNoteAdd(newNote);
    this.setState({itemId: '', itemName: '', price: '', quantity: ''});
  },

  render() {
    return (
      <div className='NoteEditor'>
        <input
          type='text'
          className='NoteEditor__title'
          placeholder='Enter id'
          value={this.state.itemId}
          onChange={this.handleTitleChange}
        />
        <input
          placeholder='Enter name'
          className='NoteEditor__title'
          value={this.state.itemName}
          onChange={this.handleTextChange}
        />
        <input
          placeholder='Enter price'
          className='NoteEditor__title'
          value={this.state.price}
          onChange={this.handlePriceChange}
        />
        <input
          placeholder='Enter quantity'
          className='NoteEditor__title'
          value={this.state.quantity}
          onChange={this.handleQuantityChange}
        />
        <div className='NoteEditor__footer'>
          <button
            className='NoteEditor__button'
            // disabled={!this.state.text}
            onClick={this.handleNoteAdd}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
});

export default NoteEditor;
