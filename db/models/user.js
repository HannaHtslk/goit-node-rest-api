import { Schema, model } from "mongoose";
import { emailRegex } from "../../constants/user-constants.js";
import { mongoSaveError, setMongoUpdateSettings } from "./hooks.js";

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      match: emailRegex,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: { type: String },
    verify: {
      type: Boolean,
      default: false,
      required: true,
    },
    verificationCode: {
      type: String,
    },
  },

  { versionKey: false, timestamps: true }
);

userSchema.post("save", mongoSaveError);
userSchema.pre("findOneAndUpdate", setMongoUpdateSettings);
userSchema.post("findOneAndUpdate", mongoSaveError);

const User = model("user", userSchema);
export default User;
