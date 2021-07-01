const {Schema, model} = require('mongoose');

const user = new Schema({
    offerType: {
      type: String,
      required: true,
    },
    text: {
        type: Object,
        required: true,
    },
    HRcontactPhone: {
        type: String,
    },
    telegram: {
        type: String,
    },
    createdAt: {
        type: Date,
        expires: 60 * 60 * 24 * 7, // week
        default: Date.now,
    },
});

module.exports = model('User', user);