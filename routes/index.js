const aboutMeRouter = require('./about');
const homeRouter = require('./home');
const contactRouter = require ('./contact');
const postRouter = require('./post');
const modifyRouter = require('./modify');
function route (app) {
    app.use('/about-me', aboutMeRouter);
    app.use('/', homeRouter);
    app.use('/contact', contactRouter );
    app.use('/post', postRouter);
    app.use('/modify', modifyRouter);
}
module.exports = route;