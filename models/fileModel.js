 const mongoose = require('mongoose');
const schema = mongoose.Schema;

const fileModel = new schema({
    name: String,
    author: String,
    type: String
});

module.exports = mongoose.model('File', fileModel);

/*
{
	"name": prueba, 
	"type": /d/Atom/NodeJs/files/prueba.txt,
	"data": docFile
}
*/