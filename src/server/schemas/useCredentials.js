const { Joi } = require("express-validation");

const credentialsLoginSchema = {
  body: Joi.object({
    username: Joi.string()
      .messages({ message: "A Username is Required" })
      .required(),
    password: Joi.string()
      .messages({ message: "A Password is Required" })
      .required(),
  }),
};

const credentialsRegisterSchema = {
  body: Joi.object({
    name: Joi.string().messages({ message: "A Name is Required" }).required(),
    username: Joi.string()

      .messages({ message: "A Username is Required" })
      .required(),
    password: Joi.string()
      .messages({ message: "A Password is Required" })
      .required(),
  }),
};

module.exports = { credentialsLoginSchema, credentialsRegisterSchema };
