



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

        
    } catch (error) {
        
    }
}