const monhoc = require ('../models/monhoc')

class subjectController {
     
     subject(req, res, next) {  
          if (req.cookies.Admin != null){
               monhoc.find({})
               .then(monhocs => res.render('subject', {dataMh: monhocs}))
               .catch(next) 
          }  else {
               res.redirect('/');
          }        
         
     }

     editsubject(req, res, next) {
          
          monhoc.findById({
               _id: req.params.id
                    })
                .then((monhocs)=>{
                   
                    res.render('editsubject', {dataMh: monhocs});
                })
                .catch(next) 
          }

     addsubject(req, res, next){
          monhoc.findOne({
               mamon: req.body.mamon
          })
          .then((data) =>{
               console.log(data);
               if(data) res.send('Môn học đã tồn tại !!!');
               else{
                    monhoc.create(req.body, (err)=>{
                         if(err) throw(err)
                         res.redirect('/subject')
                    })
               }
          })
     }

     updatesubject(req, res){
          monhoc.findByIdAndUpdate({
               _id: req.params.id
          }, {
               mamon: req.body.mamon,
               tenmon: req.body.tenmon,
               sotinchi: req.body.sotinchi
          }, (err)=> {
               if(err) throw(err);
               res.redirect('/subject');
          })
     }

     deletesubject(req, res){
          monhoc.findByIdAndDelete({
               _id: req.params.id
          }, (err)=> {
               if(err) throw(err);
               res.redirect('/subject');
          })
     }
}

module.exports = new subjectController();
