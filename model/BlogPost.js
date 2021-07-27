const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    summary: String,
    body: String,
    author: String,
    slug: { type: String, slug: "title", unique: true }
},
{
    timestamps : true    
});
const BlogPost = mongoose.model('BlogPost',BlogPostSchema);
module.exports = BlogPost;