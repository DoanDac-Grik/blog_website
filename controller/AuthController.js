const ManagerAcc = require('../model/ManagerAcc');
const bcrypt = require('bcrypt');
class AuthController {
    //[get] /login
    login(req,res,next){
        res.render('login');
    }
    //[get] /addAcc
    addAcc(req,res,next) {
        res.render('addAcc');
    }
    //[post] /createUser
    creatUser(req, res, next){
        
        ManagerAcc.create(req.body)
        .then(user => res.redirect('/'))
        .catch(error => res.send(error))
    }
    //[post] /userlogin
    userlogin(req,res,next){
      

        const { username, password } = req.body;
        ManagerAcc.findOne({ username: username }, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
            if (same) { 
                res.redirect('/');
            } else {
                res.send({message:'Sai mật khẩu'});
            }
            })
        } 
        else {
            res.send({message: 'Không tồn tại username'});
            }
        })
    }
}
module.exports = new AuthController();