const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nytSchema = new Schema ({
    title: String,
    date:String,
    url: String
});
const Article =mongoose.model("Article",nytSchema);

module.exports = Article;