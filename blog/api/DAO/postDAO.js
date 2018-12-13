
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';

const postSchema = new mongoose.Schema({
    title: {type: String},
    url: {type: String},
    content: {type: String},
 }, {
    collection: 'kuba_k'
 });
 postSchema.plugin(uniqueValidator);
 
 const PostModel = mongoose.model('product', postSchema );

 function query() {
     
    return PostModel.find({}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

function get(id) {
    return PostModel.findOne({_id: id}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

function createNewOrUpdate(data) {
    console.log("Jestem w post DAO, a oto moje dane:", data);
   
    return Promise.resolve().then(() => {
        if (!data.id) {
            return new PostModel(data).save().then(result => {
                /* if (result[0]) {
                    console.log("Wysyłam rezultat z post DAO: ", result)
                    return mongoConverter(result[0]);
                } */
                return result;
            });
        } else {
            return PostModel.findByIdAndUpdate(data.id, _.omit(data, 'id'), {new: true});
        }
      
       
    }).catch(error => {
        if ('ValidationError' === error.name) {
            error = error.errors[Object.keys(error.errors)[0]];
           console.log(error);
        }
        throw error;
    });
}


export default {
    query: query,
    get: get,
    model: PostModel,
    createNewOrUpdate: createNewOrUpdate
};