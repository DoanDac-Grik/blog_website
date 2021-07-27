const BlogPost = require('../model/BlogPost')
class ModifyController {

    //[get] /create
    //Render ra trang create post
    create(req, res, next) {
        res.render('create');
    }
    //[post] /create/new-post
    //Xử lí khi submit form tạo bài viết
    newpost(req,res,next){
        const formData = req.body;
        const blogPost = new BlogPost(formData);
        blogPost.save()
        .then(()=>res.redirect('/'))
        .catch(next);
    }
 }
module.exports = new ModifyController();