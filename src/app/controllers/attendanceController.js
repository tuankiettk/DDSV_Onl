const diemdanh = require ('../models/diemdanh')

class attendanceController {
      
     attend(req, res, next) {
     if (req.cookies.Admin != null){
          res.render('attendance')
     } else {
          res.redirect('/')
     }
          
     }
     //[post]
     addattendance(req, res, next){
          const Diemdanh = new diemdanh(req.body);
          Diemdanh.save()
               .then(() => res.redirect('/attendance'))
     }
}

module.exports = new attendanceController();
