import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const NoteActions = {
  loadNotes() {
    AppDispatcher.dispatch({
      type: Constants.LOAD_NOTES_REQUEST
    });

    api.listNotes()
      .then(({data}) =>
        AppDispatcher.dispatch({
          type: Constants.LOAD_NOTES_SUCCESS,
          notes: data
        })
      )
      .catch(err =>
        AppDispatcher.dispatch({
          type: Constants.LOAD_NOTES_FAIL,
          error: err
        })
      );
  },

  createNote(note) {
    //console.log('action', note);
    api.createNote(note)
      .then(() =>
        this.loadNotes()
      )
      .catch(err =>
        console.error(err)
      );
  },

  updateNote(noteId) {
    console.log('action',noteId);
    api.updateNote(noteId)
      .then(() =>
        this.loadNotes()
      )
      .catch(err =>
        console.error(err)
      );
  }
};

export default NoteActions;
