const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fistName : String,
    lastName : String,
    email : String,
    car : [{
        type: Schema.Types.ObjectId,
        ref: 'car'
    }]    
});

module.exports = mongoose.model('User', userSchema);