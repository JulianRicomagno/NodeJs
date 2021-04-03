const mongoose = require('mongoose');
const schema = mongoose.Schema;

const itemModel = new schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    keywords: []
});

module.exports = mongoose.model('Item', itemModel);