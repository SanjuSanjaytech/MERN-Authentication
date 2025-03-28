import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from '../models/user.model.js'

export const func = (req, res) => {
  res.json({
    message: 'api is working!'
  });
} 

//  update user 

export const updateUser = async (req, res, next) => {
  if (req.user.userId !== req.params.id) {
    return next(errorHandler(401, 'You can update only your account!'));
  }
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.userId !== req.params.id) {
    return next(errorHandler(401, 'You can Only Delete your Account'));
  }

  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User has been Deleted')
  } catch(error) {
    next(error)
  }
}

