const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required'
    },
    email : {
        type: String,
        required: 'This field is required'
    },
    description: {
        type: String,
        required: 'This field is required'
    },
    category: {
        type: String,
        enum: ['India', 'Italy', 'Japan', 'Peru', 'Iceland', 'Australia', 'Morocco'],
        required: 'This field is required'
    },
    favouritefood : {
        type: Array,
        required: 'This field is required'
    },
    image: {
        type: String,
        required: 'This field is required'
    },
});

module.exports = mongoose.model('Blog', blogSchema); //Blogs is collection name

