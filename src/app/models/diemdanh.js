const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const diemdanh = new Schema({
     madiemdanh: String,
     mssv: String,
     hoten: String,
     malop:String,
     tenmon: String,
     ngay: String,
     hocki_namhoc: String,
     buoi:String,
     
   });

   module.exports = mongoose.model('diemdanh', diemdanh);