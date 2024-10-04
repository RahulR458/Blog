const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true, 
    },
    designation: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    isBlock: {
        type: Boolean,
        default: "false",
    }
},{ timestamps: true });

module.exports = {
    Users: mongoose.model("Users", userSchema),
};
