var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String,  index: true, required: true, unique: true },
    username: { type: String, required: true },
    email: { type: String,  index: true, required: true, unique: true },
    address: {
        city: [String],
        state: [String],
        country: [String],
        pin: [Number], 
    }
    },{ timestamps: true }
);

// compound indexes
userSchema.index({'name': 1, 'email': 1},{unique: true});

userSchema.index({'address.country': 1, 'address.state': 1},{unique: true});

module.exports = mongoose.model('User', userSchema);
