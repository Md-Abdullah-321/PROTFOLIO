const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true
    },
    email: {
        type:String,
        required:true
    },
    phone:{
        type: Number,
        required: true
    },
    message: {
        type:String,
        required: true
    }
});


const Contact = mongoose.model('CONTACT',userSchema);

module.exports = Contact;