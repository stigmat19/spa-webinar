import React from 'react';

import './NoteEditor.less';

const NoteEditor = React.createClass({
  getInitialState() {
    return {
      title: '',
      text: '',
      price: '',
      quantity: '',
      color: '#FFFFFF'
    };
  },

  handleTextChange(event) {
    this.setState({text: event.target.value});
  },

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  },

  handlePriceChange(event) {
    this.setState({price: event.target.value});
  },

  handleColorChange(color) {
    this.setState({color});
  },

  handleNoteAdd() {
    const newNote = {
      title: this.state.title,
      text: this.state.text,
      price: this.state.price,
      quantity: this.state.quantity,
      color: this.state.color
    };

    this.props.onNoteAdd(newNote);
    this.setState({text: '', title: '', price: '', color: '#FFFFFF'});
  },

  render() {
    return (
      <div className='NoteEditor'>
        <input
          type='text'
          className='NoteEditor__title'
          placeholder='Enter id'
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <input
          placeholder='Enter name'
          className='NoteEditor__text'
          value={this.state.text}
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
          value={this.state.text}
          //onChange={this.handleTextChange}
        />
        <div className='NoteEditor__footer'>
          <button
            className='NoteEditor__button'
            disabled={!this.state.text}
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
