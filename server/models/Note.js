import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    itemId    : { type: Number },
    itemName  : { type: String, required: true },
    price     : { type: Number },
    quantity  : { type: Number }
});

mongoose.model('Note', NoteSchema);
