class ContactController {
    //[get] /contact
    contact(req,res, next){
        res.render('contact');
    }
}
module.exports = new ContactController();