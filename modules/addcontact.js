const mongoose = require('mongoose');

const  addcontactSchema = mongoose.Schema({

    Name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
    

});
module.exports = mongoose.model('addcontact' , addcontactSchema);