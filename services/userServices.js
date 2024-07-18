import User from "../db/models/user.js";

export const findUser = (filter) => User.findOne(filter);

export const updateUser = (filter, data) => User.findOneAndUpdate(filter, data);

export const userSignup = (data) => User.create(data);
