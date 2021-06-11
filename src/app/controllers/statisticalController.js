const thongke = require('../models/thongke');
const sinhvien = require('../models/sinhvien');

class statisticalController{

     statistical(req, res){
          //res.render('statistical')
          thongke.find()
          .then(data => {
               if(data){
                    sinhvien.find()
                    .then(sv => {
                         res.render('statistical', {data,sv})
                    })
               }
               else{
                    res.status(500).json('ERROR: Lỗi server!!!')
               }
          })
     }
     
     search(req, res){
          thongke.find({
               mssv: req.body.name_search
          })
          .then((data) => {
               sinhvien.find()
               .then((sv)=>{
                    res.json({data,sv});
               })
          })
     }
}


module.exports = new statisticalController();