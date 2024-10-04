const jwt = require("jsonwebtoken");

//verfyAccessToken
const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    console.log(token,"====================token");

    if (!token){
      console.log("token In");
      
        return res.status(401).json({
            message: "UnAuthorized",
        })};

        console.log("before Token Validation");
        
        const tokenValid = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log(tokenValid,"_________tokenValid");
        
        
        req.userId = tokenValid._id;
        next();
      } catch (error) {
          console.log("NSIDE CATCH Validation");
          console.log(error);
         res.status(401).json({
        message: "You are UnAuthorized",
    });
  }
};

module.exports = {
    checkAuth,
};
