const {Schema, model} = require('mongoose');

const user = new Schema({
    name: {
        type: String,
        required: true,
    },
    rank: {
      type: String,
      required: true,
    },
    mainSalary: {
        type: Number,
        required: true,
    },
    qualifyingSalary: {
        type: Number,
        required: true,
    },
    traineeSalary: {
        type: Number,
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
    HRcontactPhone: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        expires: 60 * 60 * 24 * 7, // week
        default: Date.now,
    },
});

module.exports = model('User', user);