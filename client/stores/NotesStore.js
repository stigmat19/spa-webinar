import {EventEmitter} from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _notes = [];
let _loadingError = null;
let _isLoading = true;

function formatNote(note) {
  //console.log('note',note);
  return {
    id: note._id,
    itemId: note.itemId,
    itemName: note.itemName,
    price: note.price,
    quantity: note.quantity
  };
}

const TasksStore = Object.assign({}, EventEmitter.prototype, {
  isLoading() {
    return _isLoading;
  },

  getNotes() {
    return _notes;
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function (action) {
  console.log('new actions', action);
  switch (action.type) {
    case AppConstants.LOAD_NOTES_REQUEST: {
      _isLoading = true;

      TasksStore.emitChange();
      break;
    }

    case AppConstants.LOAD_NOTES_SUCCESS: {
      _isLoading = false;
      _notes = action.notes.map(formatNote);
      _loadingError = null;
      console.log('formatNote', _notes);
      TasksStore.emitChange();
      break;
    }

    case AppConstants.LOAD_NOTES_FAIL: {
      _loadingError = action.error;

      TasksStore.emitChange();
      break;
    }

    default: {
      console.log('No such handler');
    }
  }
});

export default TasksStore;
