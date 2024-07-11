import HttpError from "../helpers/HttpError.js";
import { findUser, userSignup } from "../services/userServices.js";
import bcrypt from "bcrypt";

export const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await findUser({ email });

    if (user) {
      throw HttpError(409, "Email in use");
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = await userSignup({ ...req.body, password: hashedPass });

    res.status(201).json({
      status: 201,
      message: "Created",
      user: {
        email: newUser.email,
        subscription: newUser.subscription,
      },
    });
  } catch (error) {
    next(error);
  }
};
