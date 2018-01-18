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
    this.setState({itemName: event.target.value});
  },

  handleTitleChange(event) {
    this.setState({itemId: event.target.value});
  },

  handlePriceChange(event) {
    this.setState({price: event.target.value});
  },

  handleQuantityChange(event) {
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
          className='NoteEditor__text'
          value={this.state.itemName}
          onChange={this.handleTextChange}
        />
        <input
          placeholder='Enter price'
          className='NoteEditor__text'
          value={this.state.price}
          onChange={this.handlePriceChange}
        />
        <input
          placeholder='Enter quantity'
          className='NoteEditor__text'
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
