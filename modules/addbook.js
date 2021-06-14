const mongoose = require('mongoose');

const  addbookSchema = mongoose.Schema({

    Name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    label:{
        type:String
    },
    price:{

        type:Number

    },
    image:{
        type:String,
    },
    description:{
        type:String
    },
    comments:[
        {

            Name:{
                type:String,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
       
    ]

});
module.exports = mongoose.model('addbook' , addbookSchema);