
import jwt from 'jsonwebtoken'


// verify token

export const protect = async(req,res,next)=>{
    try {
        
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({
        success: false,
        message: "No token provided",
      });
        }

        // remove bearer

        const realToken = token.split(" ")[1];

        const decoded = jwt.verify(realToken,process.env.JWT_SECRET);

        req.user = decoded;

        next()
    } catch (error) {
        res.status(401).json({
      success: false,
      message: "Invalid token",
    });
    }
}

// admin only 

export const adminOnly = (req,res,next)=>{
    try {
        if (req.user.role !== "admin") {
             return res.status(403).json({
        success: false,
        message: "Admin access only",
      });
        }
        next()
    } catch (error) {
        res.status(500).json({
      success: false,
      message: error.message,
    });
    }
}