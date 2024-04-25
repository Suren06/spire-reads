import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to update this user."));
  }

  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(errorHandler(400, "Password must be at least 6 characters."));
    }

    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }

  if (req.body.username) {
    if (req.body.username.length < 7 || req.body.username.length > 20) {
      return next(
        errorHandler(400, "Username must be between 7 and 20 characters.")
      );
    }
    if (req.body.username.includes(" ")) {
      return next(errorHandler(400, "Username cannot contain spaces."));
    }
    if (req.body.username !== req.body.username.toLowerCase()) {
      return next(errorHandler(400, "Username must be lowercase."));
    }
    if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        errorHandler(400, "Username only contain letters and numbers.")
      );
    }
  }

  try {
    const existingUser = await User.findById(req.params.userId);
    if (!existingUser) {
      return next(errorHandler(404, "User not found."));
    }

    // Check if any data has been updated
    const isDataChanged = Object.keys(req.body).some(
      (key) => req.body[key] !== existingUser[key]
    );

    console.log("isDataChanged", isDataChanged);

    if (!isDataChanged) {
      return next(errorHandler(400, "No data has been updated."));
    }

    // Update user data
    const updatedUserData = {
      username: req.body.username || existingUser.username,
      email: req.body.email || existingUser.email,
      profilePicture: req.body.profilePicture || existingUser.profilePicture,
    };

    if (req.body.password) {
      if (req.body.password.length < 6) {
        return next(
          errorHandler(400, "Password must be at least 6 characters.")
        );
      }
      updatedUserData.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updateUser = await User.findByIdAndUpdate(
      req.params.userId,
      updatedUserData,
      { new: true }
    );

    const { password, ...rest } = updateUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to delete this user"));
  }

  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).json("User has been deleted");
  } catch (error) {
    next(error);
  }
};
