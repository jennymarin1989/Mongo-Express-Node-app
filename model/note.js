const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notesSchema = new Schema({
  author: String,
  text: String,
}, { timestamps: true });

// export our module to use in server.js
export default mongoose.model('Comment', CommentsSchema);