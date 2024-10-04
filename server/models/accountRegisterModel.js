const mongoose = require("mongoose");

const accountRegisterSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    accountnumber: {
        type: Number
    },
    phonenumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    ifse: {
        type: Number,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    address:{
        housename:String,
        street:String,
        city:String,
        state:String,
        country:String,
        pincode:Number
    },
    transaction : [{
        name: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        accountnumber: {
            type: Number,
        },
        status: {
            type: String,
        },
        amount: {
            type: Number,
        },
        balance: {
            type: Number,
        }
    }]
},{ timestamps: true });

module.exports = {
    AccountRegister: mongoose.model("AccountRegister", accountRegisterSchema),
};
