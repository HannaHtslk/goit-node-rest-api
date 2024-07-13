import express from "express";
import {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updContact,
  editFavoriteStatus,
} from "../controllers/contactsControllers.js";
import validateBody from "../helpers/validateBody.js";
import {
  createContactSchema,
  updateContactSchema,
  editFavoriteSchema,
} from "../schemas/contactsSchemas.js";

import authenticate from "../middlewares/authenticate.js";

const contactsRouter = express.Router();

contactsRouter.use(authenticate);

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", getOneContact);

contactsRouter.delete("/:id", deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put("/:id", validateBody(updateContactSchema), updContact);

contactsRouter.patch(
  "/:id/favorite",
  validateBody(editFavoriteSchema),
  editFavoriteStatus
);

export default contactsRouter;
