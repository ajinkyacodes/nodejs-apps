var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/nodeauth')
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("Failed to connect");
});

var db = mongoose.connection;

// User Schema
var UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	name: {
		type: String
	},
	profileimage:{
		type: String
	}
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            // Store hash in your password DB.
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}