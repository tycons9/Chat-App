import User from "../models/user.model.js";

export const getusersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        
        // Find all users except the logged-in user
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getusersForSidebar:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
