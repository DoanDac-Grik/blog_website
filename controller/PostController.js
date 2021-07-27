const BlogPost = require('../model/BlogPost')
class PostController {
    // [get] /post/:slug
    post(req,res, next) {
        BlogPost.findOne( {slug: req.params.slug} )
        .then( post => res.render('post', {post: post }))
        .catch(next)
        
    }
}
module.exports = new PostController();