const mongoose = require('mongoose');
const {Schema} = mongoose;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },

});
const User = mongoose.model('User', UserSchema);
// User.createIndexes(); so that same email cannot be added more than once. removes duplicated val. but using this way causes error and application crashes. 

module.exports = User;

//creating a model is defining the schema for it. 
//The last line mongoose.model('User', UserSchema); registers our schema with mongoose. Our user model can then be accessed anywhere in our application by calling mongoose.model('User')
//The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name.