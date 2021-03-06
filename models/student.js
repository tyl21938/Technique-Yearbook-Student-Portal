var mongoose = require('mongoose');
var crypto = require('crypto');

var StudentSchema = new mongoose.Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    nameAsAppears: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    major: {
        type: String
    }, 
    major2: {
        type: String
    },
    minor: {
        type: String
    },
    quote: {
        type: String
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    authKey: {
        type: String,
        unique: true,
        required: true
    },
    portraitURL: {
        type: String
    },
    pictured: {
        type: Boolean,
        default: false
    },
    editable: {
        type: Boolean,
        default: true
    }

});

var Student = mongoose.model('Student', StudentSchema);

module.exports = Student;