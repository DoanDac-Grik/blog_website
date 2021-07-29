const BlogPost = require('../model/BlogPost');
class HomeController {
    //[get] /
    home(req, res, next) {       
        BlogPost.find({})
        .then(blogPosts => res.render('index',{blogPosts : blogPosts}))
        .catch(next)
    }
}
module.exports = new HomeController();