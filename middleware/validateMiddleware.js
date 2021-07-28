module.exports = (req,res, next) => {
    if(req.body.title ==null || req.body.author == null || req.body.author==null || req.body.summary==null || req.files ==null){
            res.send('Bạn chưa nhập đủ dữ liệu, back lại để điền đẩy đủ thông tin');
    }
    next();
}