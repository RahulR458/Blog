const mongoose = require("mongoose");

const blogCreateSchema = new mongoose.Schema({
    image: [],
    blog_title: {
        type: String, 
    },
    publishing_date: {
        type: String,
    },
    category: {
        type: String,
        trim: true,
    },
    author: {
        type: String,
        trim: true,
    },
    paragraph_title: {
        type: String,
    },
    description: {
        type: String,
        trim: true,
    }
},{ timestamps: true });

module.exports = {
    BlogCreate: mongoose.model("Blogs", blogCreateSchema),
};
