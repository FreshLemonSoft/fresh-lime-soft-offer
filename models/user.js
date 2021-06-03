const {Schema, model} = require('mongoose');

const user = new Schema({
    offerType: {
      type: String,
      required: true,
    },
    name: {
        type: String,
        required: true,
    },
    rank: {
      type: String,
      required: true,
    },
    mainSalary: {
        type: String,
        required: true,
    },
    qualifyingSalary: {
        type: String,
        required: true,
    },
    traineeSalary: {
        type: String,
        default: null,
    },
    qualifyingPeriod: {
        type: String,
        required: true,
    },
    traineePeriod: {
        type: String,
        default: null,
    },
    vacancyLink: {
        type: String,
        required: true,
    },
    appointmentDate: {
        type: String,
        required: true,
    },
    meetPerson: {
      type: String,
      default: 'офис-менеджер Настя'
    },
    contactPhone: {
        type: String,
        default: '+375 33 317-32-84'
    },
    createdAt: {
        type: Date,
        expires: 60 * 60 * 24 * 7, // week
        default: Date.now,
    },
});

module.exports = model('User', user);