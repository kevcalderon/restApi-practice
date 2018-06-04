const User = require('../models/user');

module.exports = {

    index: async function(){
        //es una funcion asyncronica 
        const users = await User.find({},);
    }
}