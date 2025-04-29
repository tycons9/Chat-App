//protectRoutes.js


import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ error: "Unauthorized. No token provided." });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized. Invalid token." });
        }

        const foundUser = await User.findById(decoded.userId).select("-password");

        if (!foundUser) {
            return res.status(404).json({ error: "User not found." });
        }

        req.user = foundUser; 
        
        
        
        
        next(); 




    } catch (error) {




        console.error("Error in protectRoute middleware:", error.message);




        res.status(500).json({ error: "Server error." });
  
  
    }


};




export default protectRoute;
