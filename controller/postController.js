const postModel = require('../models/postModel');

function getPost(req, res) {    
    let postId = req.params.postId;
    console.log("getPost Id: " + postId);
    postModel.findById(postId, (err, post) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        if (!post) return res.status(404).send({message: `El post no existe`});
        console.log("Post: " + post);
        res.status(200).send({ 
            id: post.id,
            title: post.title,
            content: post.content,
            date: post.date
        });
    });
}

function getPosts(req, res) {
    console.log("getPosts");
    postModel.find({}, (err, posts) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        if (!posts) return res.status(404).send({message: `No existen posts`});
        console.log("Posts: " + posts);
        res.status(200).send({ posts: posts });
    });
}

function savePost(req, res) {
    let post = new postModel();
    // los req.body.param son los parametros que se mandan en el body
    post.title = req.body.title;
    post.content = req.body.content;
    post.date = Date.now();
    post.save( (err) => {
        if (err) return res.status(400).send({error: true, message: "Invalid JSON"});
        console.log("savePost OK");
        res.status(200).send({
            message: 'El post fue guardado',
            body: {
                id: post._id
            }    
        });
    });
}

function updatePost(req, res) {
    let postId = req.params.postId;
    console.log("updatePost Id:" + postId);
    // los campos a actualizar se obtienen del body del mensaje
    let update = req.body;
    console.log("update campos: " + update);
    postModel.findByIdAndUpdate(postId, update, (err, postUpdated) => {
        if (err) return res.status(500).send({message: `Error al actualizar el post: ${err}`});
        console.log("findByIdAndUpdate OK");
        res.status(200).send({ message: 'El post ha sido actualizado' });
    });
}

function deletePost(req, res) {
    let postId = req.params.postId;
    console.log("deletePost Id: " + postId);
    postModel.findById(postId, (err, post) => {
        if (err) return res.status(500).send({message: `Error al borrar el post: ${err}`});
        if (!post) return res.status(404).send({message: `No existe el post`});
        post.remove(err => {
            if (err) return res.status(500).send({message: `Error al borrar el post: ${err}`});
            console.log("post remove OK");
            res.status(200).send({message: 'El post ha sido eliminado'});
        });
    });
}

module.exports = {
    getPost,
    getPosts,
    savePost,
    updatePost,
    deletePost
}