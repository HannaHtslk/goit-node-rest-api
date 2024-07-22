import { Router } from "express";
import validateBody from "../helpers/validateBody.js";
import { subscribtionSchema, userAuthSchema } from "../schemas/authSchemas.js";
import {
  getCurrentUser,
  signin,
  signup,
  logout,
  updateSubscription,
  updateAvatar,
} from "../controllers/userControllers.js";
import authenticate from "../middlewares/authenticate.js";
import upload from "../middlewares/upload.js";

const authRouter = Router();

authRouter.get("/current", authenticate, getCurrentUser);

authRouter.post("/register", validateBody(userAuthSchema), signup);

authRouter.post("/login", validateBody(userAuthSchema), signin);

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
