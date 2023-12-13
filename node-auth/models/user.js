var mongoose = require('mongoose');

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
	newUser.save(callback);
}