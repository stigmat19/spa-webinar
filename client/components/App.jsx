import React from 'react';

import NotesStore from '../stores/NotesStore';
import NotesActions from '../actions/NotesActions';

import NoteEditor from './NoteEditor.jsx';
import NotesGrid from './NotesGrid.jsx';

import './App.less';

function getStateFromFlux() {
  return {
    isLoading: NotesStore.isLoading(),
    notes: NotesStore.getNotes()
  };
}

const App = React.createClass({
  getInitialState() {
    return getStateFromFlux();
  },

  componentWillMount() {
    NotesActions.loadNotes();
  },

  componentDidMount() {
    NotesStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    NotesStore.removeChangeListener(this._onChange);
  },

  handleNoteupdate(note) {
    NotesActions.updateNote(note.id);
  },

  handleNoteAdd(noteData) {
    //console.log('app', noteData);
    NotesActions.createNote(noteData);
  },

  handleNoteUpdate(noteNewData){
    //console.log('app',noteNewData);
    NotesActions.updateNote(noteNewData);
  },

  render() {
    //console.log('app state', this.state);
    return (
      <div className='App'>
        <h2 className='App__header'>Mobile Catalog</h2>
        <NoteEditor onNoteAdd={this.handleNoteAdd}/>
        <NotesGrid
          notes={this.state.notes}
          onNoteUpdate={this.handleNoteUpdate}/>
      </div>
    );
  },

  _onChange() {
    this.setState(getStateFromFlux());
  }
});

export default App;
