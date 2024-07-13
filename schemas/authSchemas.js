import Joi from "joi";
import { emailRegex } from "../constants/user-constants.js";

export const userAuthSchema = Joi.object({
  email: Joi.string().pattern(emailRegex).required(),
  password: Joi.string().min(6).required(),
});