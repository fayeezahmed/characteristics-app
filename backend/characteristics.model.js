const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let characteristics = new Schema({
    characteristics_type: {
        type: String
    },
    characteristics_mon: {
        type: Number
    },
    characteristics_mon: {
        type: Number
    },
    characteristics_tue: {
        type: Number
    },
    characteristics_wed: {
        type: Number
    },
    characteristics_thu: {
        type: Number
    },
    characteristics_fri: {
        type: Number
    },
    characteristics_sat: {
        type: Number
    },
    characteristics_sun: {
        type: Number
    }
});
module.exports = mongoose.model('characteristics', characteristics);
