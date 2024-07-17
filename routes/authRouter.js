import { Router } from "express";
import validateBody from "../helpers/validateBody.js";
import { userAuthSchema } from "../schemas/authSchemas.js";
import {
  getCurrentUser,
  signin,
  signup,
} from "../controllers/userControllers.js";
import authenticate from "../middlewares/authenticate.js";

const authRouter = Router();

authRouter.use(authenticate);

authRouter.get("/current", getCurrentUser);

authRouter.post("/register", validateBody(userAuthSchema), signup);

authRouter.post("/login", validateBody(userAuthSchema), signin);

export default authRouter;
