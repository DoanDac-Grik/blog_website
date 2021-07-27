const BlogPost = require('../model/BlogPost');
var path = require('path');
class ModifyController {

    //[get] /create
    //Render ra trang create post
    create(req, res, next) {
        res.render('create');
    }
    //[post] /create/new-post
    //Xử lí khi submit form tạo bài viết
    newpost(req,res,next){
        let image = req.files.image;
        
        image.mv(path.resolve(__dirname, '../public/upload', image.name));
        const formData = req.body;
        formData.image ='/public/upload/' + image.name;       
        const blogPost = new BlogPost(formData);      
        blogPost.save()
        .then(()=>res.redirect('/'))
        .catch(next);

    
    }
 }
module.exports = new ModifyController();