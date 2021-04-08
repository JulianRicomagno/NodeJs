const mongoose = require('mongoose');
const schema = mongoose.Schema;

const postModel = new schema({
    id: Number,
    title: String,
    content: String,
    date: Date
});

postModel.statics.allposts = function(cb){
    return postModel.count();
}

postModel.statics.countBicis = function(){
    let cont = 0;
    for (const doc of postModel) {
        cont ++;
    }
    return cont;
} 

module.exports = mongoose.model('Post', postModel);