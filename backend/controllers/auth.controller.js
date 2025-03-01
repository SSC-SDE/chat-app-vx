import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async(req,res) => {
   try {
    const {fullName,userName,password, confirmPassword,gender} = req.body;
     
    if(password !== confirmPassword){
        return res.status(400).json({error:"Passwords don't match"})
    }

    const user = await User.findOne({userName});

    if(user){
        return res.status(400).json({
            error:"userName already exists"
        })
    }

    //Hash passwords here

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //https://avatar.iran.liara.run/public/boy?userName=Scott

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?userName=${userName}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?userName=${userName}`

    const newUser = new User({
        fullName,
        userName,
        password : hashedPassword,
        gender,
        profilePic: gender === "male" ? boyProfilePic : girlProfilePic
    })

    if(newUser){
        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            profilePic: newUser.profilePic
        })
    }else{
        res.status(400).json({error: "Invalid user data"});
    }


   } catch (error) {
    console.log("Error in Signup Controller", error.message);
    res.status(500).json({
        error:"Internal Server Error"
    })
   }
}

export const login = (req,res) => {
    console.log("login user");
}

export const logout = (req,res) => {
    console.log("Logout user");
}