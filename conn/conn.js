const mongoose = require('mongoose');

const db_path = 'mongodb://localhost/test';
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(db_path, config, error => {
    if(!error) {
        console.log('Successful connection.');
    } else {
        console.log('Error connecting to database.');
    };
});