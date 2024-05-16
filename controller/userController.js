const joi = require("joi");
const createUserSchema = joi.object().keys({
  userName: joi.string().email().required(),
  password: joi.string().min(6).max(30).required(),
});

module.exports = {
  createUser: async (req, res) => {
    try {
      const validate = await createUserSchema.validateAsync(req.body);
      return res.send({
        message: "created successfully",
        data: validate,
      });
    } catch (error) {
      return res.send({
        message: error.message,
      });
    }
  },
};
