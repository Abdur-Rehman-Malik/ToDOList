const joi = require("joi");
const userService = require("../services/userService");
const createUserSchema = joi.object().keys({
  userName: joi.string().alphanum().min(6).max(30).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).max(30).required(),
  confirmPassword: joi.ref("password"),
});
module.exports = {
  createUser: async (req, res) => {
    try {
      const validate = await createUserSchema.validateAsync(req.body);
      const user = userService.createUser(validate);
      if (user.error) {
        return res.send({
          error: user.error,
        });
      }
      return res.send({
        response: user.response,
        data: validate,
      });
    } catch (error) {
      return res.send({
        message: error.message,
      });
    }
  },
};
