const sinhvien = require ('../models/sinhvien')

class studentController {
     student(req, res, next) {   
          if(req.cookies.Admin != null)  {
               sinhvien.find({})
               .then(sinhviens => res.render('student', {dataSv: sinhviens}))
               .catch(next)
          } else{
               res.redirect('/');
          }    
     }
     editstudent(req, res, next) {
          
          sinhvien.findById({
               _id: req.params.id
          })
                .then(sinhviens => res.render('editstudent', {dataSv: sinhviens}))
                .catch(next)
           //res.render('test')    
      }

     addstudent(req, res, next){
          sinhvien.findOne({
               mssv: req.body.mssv
          })
          .then((data) => {
               console.log(data);
               if(data) res.send('Sinh viên đã tồn tại !!!');
               else {
                    sinhvien.create(req.body, (err) => {
                         if(err) throw(err)
                         res.redirect('/student')
                    })
               }
          })
     }

     updatestudent(req, res){
          sinhvien.findByIdAndUpdate({
               _id: req.params.id
          }, {
               mssv: req.body.mssv,
               hoten: req.body.hoten,
               ngaysinh: req.body.ngaysinh,
               diachi: req.body.diachi,
               sdt: req.body.sdt,
               gioitinh: req.body.gioitinh,
               malop: req.body.malop
          }, (err) => {
               if(err) throw(err);
               res.redirect('/student');
          })
     }

     deletestudent(req, res) {
          sinhvien.findByIdAndDelete({
               _id: req.params.id
          }, (err) => {
               if(err) throw(err);
               res.redirect('/student')
          })
     }
}

module.exports = new studentController();
