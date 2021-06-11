//const { render } = require('ejs');
const account = require('../models/account');

class siteController {
     index(req, res, next) {
          res.render('home', {title: 'Trang chủ'});
      }

      login(req, res, next) {

        res.render('login')
      }
      login_post(req,res){
        //res.json(req.body);
        account.findOne({
          username: req.body.user_name,
          password: req.body.password
        })
        .then((data)=>{
          if(data != null && data.username !='Admin'){
            res.cookie('Account', data._id,{maxAge:60000*60});
            res.redirect('/')
          }
          else if(data != null && data.username == 'Admin'){
            res.cookie('Account', data._id,{maxAge:60000*60});
            res.cookie('Admin', data._id,{maxAge:60000*60});
            res.redirect('/')
          }
          else{
            res.redirect('/login')
          }
        })

      }

      Cookies(req, res, next){
        if(req.cookies.Account != null){
          account.findOne({
            _id: req.cookies.Account,
          })
          .then((acc) => {
            res.json(acc)
          })
        }else {
          res.send('false');
        }

      }

      //Đăng xuất
      logout(req, res,next){
        if(req.cookies.Admin != null){
          res.clearCookie('Account')
          res.clearCookie('Admin')
          res.redirect('/login')
        } else{
          res.clearCookie('Account')
          res.redirect('/login')
        }
      }

   

     

}

module.exports = new siteController();
