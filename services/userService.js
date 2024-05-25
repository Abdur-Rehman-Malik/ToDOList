const { hash } = require("bcryptjs");
const userModels = require("../models/userModels");

module.exports = {
  createUser: async (body) => {
    try {
      body.password = await hash(body.password, 10);
      delete body.confirmPassword;
      // console.log("check1");
      const user = await userModels.createUser(body);
      // console.log("check2");
      if (user.error) {
        return {
          error: user.error,
        };
      }
      delete user.response.password;
      return {
        response: user.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
