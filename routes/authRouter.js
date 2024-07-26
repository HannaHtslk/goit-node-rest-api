import { Router } from "express";
import validateBody from "../helpers/validateBody.js";
import {
  emailAuthSchema,
  subscribtionSchema,
  userAuthSchema,
} from "../schemas/authSchemas.js";
import {
  getCurrentUser,
  signin,
  signup,
  logout,
  updateSubscription,
  updateAvatar,
  verify,
  resendVerify,
} from "../controllers/userControllers.js";
import authenticate from "../middlewares/authenticate.js";
import upload from "../middlewares/upload.js";

const authRouter = Router();

authRouter.post("/register", validateBody(userAuthSchema), signup);

authRouter.get("/verify/:verificationCode", verify);

authRouter.get("/verify", validateBody(emailAuthSchema), resendVerify);

authRouter.post("/login", validateBody(userAuthSchema), signin);

authRouter.get("/current", authenticate, getCurrentUser);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  updateAvatar
);

authRouter.patch(
  "/",
  authenticate,
  validateBody(subscribtionSchema),
  updateSubscription
);

authRouter.post("/logout", authenticate, logout);

export default authRouter;
