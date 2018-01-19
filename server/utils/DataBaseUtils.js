import mongoose from "mongoose";

import config from '../../etc/config.json';

import '../models/Note';

const Note = mongoose.model('Note');

export function setUpConnection() {
  mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listNotes(id) {
  return Note.find();
}

export function createNote(data) {
  const note = new Note({
    itemId: data.itemId,
    itemName: data.itemName,
    price: data.price,
    quantity: data.quantity
  });

  return note.save();
}


export function updateNote(newData) {
  return Note.update({_id : newData._id}, {_id : newData._id, quantity : newData.quantity}, {upsert: true})
}

