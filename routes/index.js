const aboutMeRouter = require('./about');
const homeRouter = require('./home');
const contactRouter = require ('./contact');
const postRouter = require('./post');
const modifyRouter = require('./modify');
const authRouter = require('./auth');
const auth =require('../middleware/authMiddleware');

function route (app) {
    app.use('/about-me', aboutMeRouter);
    app.use('/' , homeRouter);
    app.use('/contact', contactRouter );
    app.use('/post', postRouter);
    app.use('/modify', auth.verifyAcc, modifyRouter);
    app.use('/auth', authRouter );
    app.use((req, res) => res.render('notfound'));
}
module.exports = route;