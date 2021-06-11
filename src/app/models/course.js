const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Course = new Schema({
     malop: { type: String },
     tenlop: { type: String },
     mota: { type: String },
   });

   module.exports = mongoose.model('Course', Course);