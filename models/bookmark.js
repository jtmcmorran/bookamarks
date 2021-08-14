const { Schema, model } = require('mongoose');
const bookmarkSchema = new Schema({
  text:{type:String, required:true},
  link:{type:String, required:true}
})

const Bookmark = model('Bookmark', bookmarkSchema);
module.exports = Bookmark;
