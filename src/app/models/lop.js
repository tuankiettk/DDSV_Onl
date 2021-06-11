const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const lop = new Schema({
     malop: { type: String, required: true},
     tenlop: { type: String }
   });

   module.exports = mongoose.model('lop', lop);