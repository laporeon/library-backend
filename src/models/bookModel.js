const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const BookSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  publisher: {
    type: String,
    require: true,
  },
  picture: {
    type: String,
    require: true,
  },
  authors: [
    {
      type: String,
      require: true,
    },
  ],
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
