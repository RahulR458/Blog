const mongoose = require("mongoose");
const { Users } = require("../models/userModel");
const { generatePasswordHash, comparePasswordHash } = require("../utils/bcrypt");
const { generateAccessToken, verifyRefreshToken, generateRefreshToken } = require("../utils/jwt");
const { BlogCreate } = require("../models/blogCreateModel");

const signup = async (req, res) => {
    try {
        console.log(req.body);
        
        const { name, designation, email, password } = req.body;
        const isExist = await Users.findOne({ email });
        if (isExist) {
            return res.status(400).json({
                message: "User Already Exist",
            });
        }
        const hashedPassword = await generatePasswordHash(password);
        const isCreate = await Users.create({
            username: name,
            email: email,
            designation: designation,
            password: hashedPassword,
        });

        if (!isCreate) {
            return res.status(400).json({
                message: "Account creation failed",
            });
        }
        res.status(201).json({
            message: "Account has been created successfully",
        });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
};

const login = async (req, res) => {
    console.log("login______");
    console.log(req.body);
    
    
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email: email });
        console.log(user);
        if (!user) {
            return res.status(404).json({
                message: "Invalid password or Username",
            });
        }

        console.log(user.isBlock,"_____user.isBlock");
        

        if (user.isBlock) {
            console.log("inside isBlock");
            
            return res.status(404).json({
                message: "Invalid User",
            });
        }

        const validPassword = await comparePasswordHash(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                message: "Invalid password or Username",
            });
        }
        const accessToken = generateAccessToken(user._id);
        const refreshToken = generateRefreshToken(user._id);

        res.cookie("refreshToken", refreshToken, {
            httpOnly: false,
            secure: false
        }).status(200).json({ accessToken, user, message: "login successfull" });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
};

const blog = async (req, res) => {
    try {
        console.log("blog");
        
        const blogs = await BlogCreate.find()

        if (!blogs) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        res.status(200).json({ blogs });
    } catch (error) {
        console.error("Error fetching blog:", error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
};





const refreshToken = (req, res) => {
console.log("==refreshToken");

    const userId = verifyRefreshToken(req.cookies.refreshToken);
    console.log(userId,"==verifyRefreshToken");
    
    if (!userId) {
        return res.status(401).json({ message: "Refresh token is expired" });
    }

    const accessToken = generateAccessToken(userId);

    const refreshToken = generateRefreshToken(userId);

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
    }).json({ accessToken });
};


module.exports = {
    login,
    signup,
    blog,
    refreshToken,
};
