import { Router } from "express";
import validateBody from "../helpers/validateBody.js";
import { userAuthSchema } from "../schemas/authSchemas.js";
import {
  getCurrentUser,
  signin,
  signup,
  logout,
} from "../controllers/userControllers.js";
import authenticate from "../middlewares/authenticate.js";

const authRouter = Router();

authRouter.get("/current", authenticate, getCurrentUser);

authRouter.post("/register", validateBody(userAuthSchema), signup);

authRouter.post("/login", validateBody(userAuthSchema), signin);

authRouter.post("/logout", authenticate, logout);

export default authRouter;
