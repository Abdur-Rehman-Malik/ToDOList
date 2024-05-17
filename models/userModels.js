module.exports = {
  createUser: async (body) => {
    try {
      // create db
      const user = body; //passing body as user oject
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
