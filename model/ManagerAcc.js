const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const ManagerAccSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: String
});
//Hàm .pre() thông báo Mongoose biết cần thực hiện tham số thứ 2 trước khi save
ManagerAccSchema.pre('save', function (next){
    const user = this;
    bcrypt.hash(user.password, 10)
    .then( hash => { 
        user.password= hash; 
        next();
    }) 
})
const ManagerAcc = mongoose.model('ManagerAcc', ManagerAccSchema);
module.exports = ManagerAcc;