'use strict';

// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var strategySchema = mongoose.Schema({

    name: {
        type: String,
        min: [1, 'Too few characters'],
        max: 100,
        required: [true, 'Please enter a username.']
    },
    unitPositions: {
        type: String,
        required: true
    },
    UserId: {
        type: String
    }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Strategy', strategySchema);