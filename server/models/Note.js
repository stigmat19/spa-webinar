import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title     : { type: String },
    text      : { type: String, required: true },
    price     : { type: String },
    quantity  : { type: String },
    color     : { type: String },
    createdAt : { type: Date }
});

mongoose.model('Note', NoteSchema);
