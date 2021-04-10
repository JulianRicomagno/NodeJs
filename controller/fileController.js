const fileModel = require('../models/fileModel');
const fs = require('fs');

function getFile(req, res) {
    let fileId = req.params.fileId;
    console.log("getFile Id: " + fileId);
    fileModel.findById(fileId, (err, file) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        if (!file) return res.status(404).send({message: `El file no existe`});
        console.log("Item: " + file);
        res.status(200).send({ file: file });
    });
}

//function getFiles(req, res) {}

function saveFile(req, res) {
    let file = new fileModel();
    // los req.body.param son los parametros que se mandan en el body
    file.name = req.body.name;
    file.author = req.body.author;
    if(req.file){
        file.type = req.file.path
    };
    console.log("saveFile: " + file);
    file.save( (err) => {
        if (err) return res.status(400).send({error: true, message: "Invalid JSON"});
        console.log("saveItem OK");
        res.status(200).send({
            message: 'El file fue guardado', 
            body: {
                id: file._id
            }   
        });
    });
}

//function deleteFile(req, res) {}

module.exports = {
    getFile,
    //getFiles,
    saveFile,
    //deleteFile
}
