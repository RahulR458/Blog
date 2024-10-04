const mongoose = require("mongoose");
const { Users } = require("../models/userModel");
const { generatePasswordHash, comparePasswordHash } = require("../utils/bcrypt");
const { generateAccessToken, verifyRefreshToken, generateRefreshToken } = require("../utils/jwt");
// const {blogCreateModel} = require("../models/blogCreateModel");
const { BlogCreate } = require("../models/blogCreateModel")



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
            httpOnly: true,
            secure: true
        }).status(200).json({ accessToken, user, message: "login successfull" });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
};

const createBlog = async (req, res) => {
    console.log("createBlog");
    console.log(req.body,"____req");
    try {
        const images = req.files["images"] ? req.files["images"].map((file) => file.path) : [];
        const searchString = "images-";
        const [file_path] = images;
        const searchStringIndex = file_path.indexOf(searchString);

        if (searchStringIndex === -1) {
            return req.file.path;
        }
        const result = file_path.slice(searchStringIndex + searchString.length);

        let currentNews = await BlogCreate.create({
            blog_title: req.body.blog_title,
            publishing_date: req.body.publishing_date,
            category: req.body.category,
            author: req.body.author,
            paragraph_title: req.body.paragraph_title,
            description: req.body.description,
            image: result,
        });
        let news = await BlogCreate.find();
        res.json({
            message: "blog has been Created",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to News creation" });
    }
}


// DELETE route to remove a user by ID
const remove = async (req, res) => {
    console.log("remove");
    
    try {
      const userId = req.params.id;
      console.log(userId);
      
      const deletedUser = await BlogCreate.findByIdAndDelete(userId);
      console.log(deletedUser);
      
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'User deleted successfully', user: deletedUser });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting user', error });
    }
  };


  const block = async (req, res)=>{
    console.log("block");
    const userId = req.params.id;
    const { isBlock } = req.body;  // Expect true or false in the request body
    console.log(userId,"----",isBlock);
    

    try {
        // Find user by ID and update the isBlock field
        const updatedUser = await Users.findByIdAndUpdate(
            userId, 
            { isBlock: isBlock },  // Set isBlock to true/false
            { new: true }  // Return the updated document
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        const allUser = await Users.find()

        res.status(200).json({
            message: "User block status updated successfully",
            user: allUser,
        });
    } catch (error) {
        res.status(500).json({ message: "Error updating block status", error });
    }
  }


  const editBlog = async (req, res)=>{
    console.log("editBlog");
    try {
        const userId = req.params.id;
        const blog = await BlogCreate.findById(userId);
        console.log(userId);
        console.log(blog,"______user");
        
        
        res.status(200).json({
            message: "Get blog successfully",
            blog: blog, 
        });
    } catch (error) {
        
    }
    }


    const edited = async (req, res)=>{
        console.log("edited");
        const blogId = req.params.id;
        const { blog_title, publishing_date, category, author, paragraph_title, description } = req.body;

        try {
            // Find the blog post by ID and update it
            const updatedBlog = await BlogCreate.findByIdAndUpdate(
                blogId, 
                {
                    $set: {
                        blog_title,
                        publishing_date,
                        category,
                        author,
                        paragraph_title,
                        description,
                    }
                }, 
                { new: true } // This option returns the updated document
            );

            if (!updatedBlog) {
                return res.status(404).json({ message: "Blog not found" });
            }

            res.status(200).json({
                message: "Blog updated successfully",
                updatedBlog
            });
        } catch (error) {
            res.status(500).json({ message: "An error occurred while updating the blog", error });
        }
    }


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


    const user = async (req, res)=>{
        console.log( "user");
        try {
            const user = await Users.find()
    
            if (!user) {
                return res.status(404).json({
                    message: "User not found",
                });
            }
    
            res.status(200).json({ user });
            
        } catch (error) {
            console.error("Error during user list:", error);
            res.status(500).json({
                message: "Internal server error",
            });
        }   
    
        
    }


  
  





const userauth = async (req, res) => {
    try {
        let alluser;
        let { id, auth } = req.body;

        console.log(id, auth, "userauth");

        let user = await Users.findByIdAndUpdate({ _id: id });
        console.log(user);
        user.status = auth;
        await user.save();

        alluser = await Users.find();
        res.status(200).json({ alluser });
    } catch (error) {
        console.log(error);
    }
};

const refreshToken = (req, res) => {
    // refresh token
    const userId = verifyRefreshToken(req.cookies.refreshToken);
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
    userauth,
    refreshToken,
    createBlog,
    remove,
    block,
    editBlog,
    edited,
    blog,
    user,
};
