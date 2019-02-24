const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let characteristics = new Schema({
 traitName: {
     type: String
 },
 mon: {
     type: Number
 },
 tue: {
     type: Number
 },
 wed: {
     type: Number
 },
 thu: {
     type: Number
 },
 fri: {
     type: Number
 },
 sat: {
     type: Number
 },
 sun: {
     type: Number
 }
});
module.exports = mongoose.model('characteristics', characteristics);
