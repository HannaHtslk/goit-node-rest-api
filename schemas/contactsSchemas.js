import Joi from "joi";

export const createContactSchema = Joi.object({
  name: Joi.string().min(1).required().messages({
    "string.empty": `"name" cannot be an empty field`,
    "any.required": `"name" is a required field`,
  }),
  email: Joi.string().email().required().messages({
    "string.email": `"email" must be a valid email address`,
    "any.required": `"email" is a required field`,
  }),
  phone: Joi.string().min(1).required().messages({
    "string.empty": `"phone" cannot be an empty field`,
    "any.required": `"phone" is a required field`,
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(1).optional().messages({
    "string.empty": `"name" cannot be an empty field`,
  }),
  email: Joi.string().email().optional().messages({
    "string.email": `"email" must be a valid email address`,
  }),
  phone: Joi.string().min(1).optional().messages({
    "string.empty": `"phone" cannot be an empty field`,
  }),
});

export const editFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});
