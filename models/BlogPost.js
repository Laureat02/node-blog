const mongoose = require('mongoose');
const { isModuleNamespaceObject } = require('util/types');
const Schema = mongoose.Schema; 


const BlogPostSchema = new Schema({
  title:String, 
  body:String
})

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
module.exports = BlogPost