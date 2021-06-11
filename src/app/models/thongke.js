const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const thongke = new Schema({
     madiemdanh: String,
     mssv: String,
     hoten: String,
     malop: String,
     tenmon: String,
     ngay: String,
     hocki_namhoc:String,
     buoi: String,
     
   },{
     collection: 'diemdanhs'
   });

   module.exports = mongoose.model('thongke', thongke);