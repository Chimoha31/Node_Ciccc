const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    author: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    },
    image: {
        type: String,
        required: false
    }
}, {
    timestamps: true
})

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
