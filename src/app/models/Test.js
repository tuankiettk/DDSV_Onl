const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Couser = new Schema({
     malop: String,
     tenlop: String,
     mota: String,
   });

   const Test = mongoose.model('Couser', Couser);