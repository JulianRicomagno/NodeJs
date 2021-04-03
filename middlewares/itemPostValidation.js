'use strict';

function validarPostItem(req, res, next) {
    let id = req.body.id;
    let name = req.body.name;
    let error;

    if (id === "" || id === null) {
        error = `Error: el id del item no puede estar vacio`;
        console.log(error);
        return res.status(500).send({ 
            message: error 
        });
    }

    if (name === "" || name === null) {
        error = `Error: el name del item no puede estar vacio`;
        console.log(error);
        return res.status(500).send({ 
            message: error 
        });
    }

    next();
}

module.exports = validarPostItem;