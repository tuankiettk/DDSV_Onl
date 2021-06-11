const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const monhoc = new Schema({
     mamon: String,
     tenmon:   String,
     sotinchi:  String
   });

   module.exports = mongoose.model('monhoc', monhoc);