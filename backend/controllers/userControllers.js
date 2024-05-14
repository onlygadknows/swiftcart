import asyncHandler from "../middleware/asyncHandler.js"
import User from "../models/userModel.js";

//@desc Auth user
//@route POST /api/users/login
//@access Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(401);
        throw new Error('Invalid email or password')
    }

    // res.send('auth user')
});

//@desc Register user
//@route POST /api/users/login
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    res.send('register user')
});

//@desc Logout user / clear cookie
//@route POST /api/users/logout
//@access Private
const logoutUser = asyncHandler(async (req, res) => {
    res.send('logout user')
});

//@desc get user profile
//@route GET /api/users/profile
//@access private
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile')
});

//@desc Update user profile
//@route PUT /api/users/profile
//@access private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile')
});

//@desc get users 
//@route GET /api/users
//@access Private/admin
const getUsers = asyncHandler(async (req, res) => {
    res.send('get user profile')
});

//@desc get users 
//@route GET /api/users
//@access Private/admin/:id
const getUsersByID = asyncHandler(async (req, res) => {
    res.send('get user by ID')
});

//@desc Delete users 
//@route DELETE /api/users/:id
//@access Private/admin
const deleteUser = asyncHandler(async (req, res) => {
    res.send('delete user')
});

//@desc Update users 
//@route PUT /api/users/:id
//@access Private/admin
const updateUser = asyncHandler(async (req, res) => {
    res.send('update user')
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUsersByID,
    updateUser
}





