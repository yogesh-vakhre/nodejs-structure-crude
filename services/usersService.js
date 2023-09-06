
const userModel = require('../models/userModel');

// get all users
const getAllUsers = async () => {
  const users = await userModel.find();
  return users;
};

// get user by id
const getUserById = async (id) => {
  const user = await userModel.findById(id);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

// create new user
const createUser = async (userData) => {
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    throw new BadRequestError('Email already registered');
  }
  const user = await userModel.create(userData);
  return user;
};

// update user by id
const updateUserById = async (id, userData) => {
  const user = await userModel.findByIdAndUpdate(id, userData, {
    new: true,
  });
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

// delete user by id
const deleteUserById = async (id) => {
  const user = await userModel.findByIdAndDelete(id);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
