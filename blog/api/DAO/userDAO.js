import mongoose from 'mongoose';
import * as _ from 'lodash';
import Promise from 'bluebird';
import mongoConverter from '../service/mongoConverter';
import uniqueValidator from 'mongoose-unique-validator';
import applicationException from '../service/applicationException';

const userRole = {
  admin: 'admin',
  user: 'user'
};

const userRoles = [userRole.admin, userRole.user];

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    enum: userRoles,
    default: userRole.user,
    required: false
  },
  active: {
    type: Boolean,
    default: true,
    required: false
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: false
  }
}, {
  collection: 'kuba_k_user'
});

userSchema.plugin(uniqueValidator);

const UserModel = mongoose.model('kuba_k_user', userSchema);

async function createNewOrUpdate(user) {
  console.log("DAO: ", user)
  return Promise.resolve().then(() => {
  
      if (!user.id) {

       return new UserModel(user).save().then(result => {
        console.log('Utworzony use w DAO: ', result);
        if (result) {
          return  mongoConverter(result);
 
        }
      });
    } else {
      return UserModel.findByIdAndUpdate(user.id, _.omit(user, 'id'), {
        new: true
      });
    }  
  }).catch(error => {
    console.log('Złapany błąd !: ',error);

    if ('ValidationError' === error.name) {
      error = error.errors[Object.keys(error.errors)[0]];
      throw applicationException.new(applicationException.BAD_REQUEST, error.message);
    }
    throw error;
  });
}

async function getByEmailOrName(name) {
  console.log('DAO: ',name)
  const result = await UserModel.findOne({
    $or: [{
      email: name
    }, {
      name: name
    }]
  });
  if (result) {
    let newResult = mongoConverter(result);
    console.log('Nowy result: ',newResult)
    return newResult;
  }
  throw applicationException.new(applicationException.NOT_FOUND, 'User not found');
}

async function get(id) {
  const result = await UserModel.findOne({
    _id: id
  });
  if (result) {
    return mongoConverter(result);
  }
  throw applicationException.new(applicationException.NOT_FOUND, 'User not found');
}

async function removeById(id) {
  return await UserModel.findByIdAndRemove(id);
}

export default {
  createNewOrUpdate: createNewOrUpdate,
  getByEmailOrName: getByEmailOrName,
  // getUserByActivationHash: getUserByActivationHash,
  get: get,
  // getAllUsers: getAllUsers,
  removeById: removeById,

  userRole: userRole,
  model: UserModel
};
