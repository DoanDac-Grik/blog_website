

const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog_website', { useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true})
        console.log('Connect to MongoDB successfully!!!');
    } catch (error) {
        console.log('Fail to connect to MongoDB');
    }
    
}
module.exports = {connect};
