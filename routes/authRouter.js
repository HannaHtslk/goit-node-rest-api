import { Router } from "express";
import validateBody from "../helpers/validateBody.js";
import { userAuthSchema } from "../schemas/authSchemas.js";
import { signin, signup } from "../controllers/userControllers.js";

const authRouter = Router();

authRouter.post("/register", validateBody(userAuthSchema), signup);

authRouter.post("/login", validateBody(userAuthSchema), signin);

export default authRouter;
