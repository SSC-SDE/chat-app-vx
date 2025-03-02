import User from "../models/user.model.js";

export const getUsersForSidebar = async(req, res) =>{
    try {
        
        const loggedInUserid = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserid}}).select("-password");

        return res.status(200).json(filteredUsers);

    } catch (error) {
        console.error("Error in user controller", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}