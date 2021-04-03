const itemModel = require('../models/itemModel');

function getItem(req, res) {    
    let itemId = req.params.itemId;
    console.log("getItem Id: " + itemId);
    itemModel.findById(itemId, (err, item) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        if (!item) return res.status(404).send({message: `El item no existe`});
        console.log("Item: " + item);
        res.status(200).send({ item: item });
    });
}

function getItems(req, res) {
    console.log("getItems");
    itemModel.find({}, (err, items) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        if (!items) return res.status(404).send({message: `No existen items`});
        console.log("Items: " + items);
        res.status(200).send({ items: items });
    });
}

function saveItem(req, res) {
    let item = new itemModel();
    // los req.body.param son los parametros que se mandan en el body
    item.id = req.body.id;
    item.name = req.body.name;
    item.keywords = req.body.keywords;
    console.log("saveItem: " + item);
    item.save( (err) => {
        if (err) return res.status(400).send({error: true, message: "Invalid JSON"});
        console.log("saveItem OK");
        res.status(200).send({
            message: 'El item fue guardado',
            body: {
                id: item.id,
                name: item.name
            }    
        });
    });
}

function updateItem(req, res) {
    let itemId = req.params.itemId;
    console.log("updateItem Id:" + itemId);
    // los campos a actualizar se obtienen del body del mensaje
    let update = req.body;
    console.log("update campos: " + update);
    itemModel.findByIdAndUpdate(itemId, update, (err, itemUpdated) => {
        if (err) return res.status(500).send({message: `Error al actualizar el item: ${err}`});
        console.log("findByIdAndUpdate OK");
        res.status(200).send({ message: 'El item ha sido actualizado' });
    });
}

function deleteItem(req, res) {
    let itemId = req.params.itemId;
    console.log("deleteItem Id: " + itemId);
    itemModel.findById(itemId, (err, item) => {
        if (err) return res.status(500).send({message: `Error al borrar el item: ${err}`});
        if (!item) return res.status(404).send({message: `No existe el item`});
        item.remove(err => {
            if (err) return res.status(500).send({message: `Error al borrar el item: ${err}`});
            console.log("item remove OK");
            res.status(200).send({message: 'El item ha sido eliminado'});
        });
    });
}

module.exports = {
    getItem,
    getItems,
    saveItem,
    updateItem,
    deleteItem
}