import { createContactSchema } from "../schemas/contactsSchemas.js";
import { updateContactSchema } from "../schemas/contactsSchemas.js";

const validateContact = (req, res, next) => {
  const schema =
    req.method === "POST" ? createContactSchema : updateContactSchema;
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  } else {
    next();
  }
};
export default validateContact;
