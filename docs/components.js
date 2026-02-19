module.exports = {
  components: {
    schemas: {
      User: {
        type: "object",
        properties: {
          username: {
            type: "string",
            description: "username to register",
            example: "John",
          },
          email: {
            type: "string",
            description: "email to register",
            example: "john@gmail.com",
          },
          password: {
            type: "string",
            description: "user password",
            example: "123456",
          },
        },
      }, 
    _id: {
        type: "objectId",
        description: "An id of a user",
        example: "6201064b0028de7866e2b2c4",
      },
    },
  },
};