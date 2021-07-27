class AboutController {
    //[get] /about-me
    aboutMe(req, res, next) {
        res.render('about')
    }
}
module.exports =new AboutController();