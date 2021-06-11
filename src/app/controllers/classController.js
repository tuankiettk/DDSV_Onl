const lop = require('../models/lop')

class classController {
     class(req, res, next) {
          if (req.cookies.Admin != null) {
               lop.find()
                    .then(lops => res.render('class', { dataCl: lops }))
                    .catch(next)
          }
          else{
               res.redirect('/');
          }
     }

     editclass(req, res, next) {

          lop.findById({
               _id: req.params.id
          })
               .then((lops) => {
                    res.render('editclass', { dataCl: lops });
               })
               .catch(next)
     }


     //[POST] 
     addclass(req, res, next) {
          //res.json(req.body)
          lop.findOne({
               malop: req.body.malop
          })
               .then((data) => {
                    console.log(data);
                    if (data) res.send('Lớp đã tồn tại !!!')
                    else {
                         lop.create(req.body, (err) => {
                              if (err) throw (err)
                              res.redirect('/class')
                         })
                    }
               })
     }

     updateclass(req, res) {
          lop.findByIdAndUpdate({
               _id: req.params.id
          }, {
               malop: req.body.malop,
               tenlop: req.body.tenlop
          }, (err) => {
               if (err) throw (err)
               res.redirect('/class');
          })
     }

     deleteclass(req, res) {
          lop.findByIdAndDelete({
               _id: req.params.id
          }, (err) => {
               if (err) throw (err);
               res.redirect('/class')
          })
     }



}

module.exports = new classController();
