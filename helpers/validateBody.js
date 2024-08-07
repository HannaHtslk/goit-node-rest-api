import HttpError from "./HttpError.js";

const validateBody = (contactSchema) => {
  const foo = (req, res, next) => {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      return next(
        HttpError(400, "Помилка від Joi або іншої бібліотеки валідації")
      );
    } else {
      next();
    }
  };
  return foo;
};
export default validateBody;
