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
        // **Vướng mắc phần callback => promise
        ManagerAcc.findOne({ username: username }, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
            if (same) {
                //req.session.[cái gì đó] chứa giá trị trong 1 session
                req.session.userId = user._id;
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
    //[get] /logout
    userlogout(req, res, next) {
        req.session.destroy(()=> { res.redirect('/')});
    }
}
module.exports = new AuthController();