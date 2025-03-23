import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
// In this snippet, we define a userSchema object using the mongoose.Schema class. This object defines the structure of the user document in MongoDB, including the fields username, email, and password. We also specify that the username and email fields are required and unique.   