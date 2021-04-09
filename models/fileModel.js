 const mongoose = require('mongoose');
const schema = mongoose.Schema;

const fileModel = new schema({
    name: String,
    type: String,
    data: Buffer
});

module.exports = mongoose.model('File', fileModel);

/*
{
	"name": prueba, 
	"type": files,
	"data": docFile
}
*/