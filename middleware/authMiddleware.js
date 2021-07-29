const ManagerAcc = require('../model/ManagerAcc');
verifyAcc = (req,res,next) => {
    ManagerAcc.findById({_id: req.session.userId})
    .then(next())
    .catch(err => res.send('xịt'))
}
isAdmin = (req,res, next) => {
    ManagerAcc.findById(req.session.userId)
    .then( user => {
        
        if(user.username === 'admin'){
            next();
        }
        else {
            res.send('Require admin role!!!')
        }
    })
    .catch(err => res.send('Unauthorized!'))
}
const auth = { verifyAcc, isAdmin};
module.exports = auth;