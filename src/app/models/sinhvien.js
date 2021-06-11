const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const sinhvien = new Schema({
     mssv: String,
     hoten:  String ,
     ngaysinh:  String,
     diachi: String,
     sdt: String,
     gioitinh: String,
     malop: String
   });

   module.exports = mongoose.model('sinhvien', sinhvien);