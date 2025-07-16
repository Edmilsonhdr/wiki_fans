const characterSchema = require("./schemas/characterSchema");
const characterResolver = require("./resolvers/characterResolver");

module.exports = {
  typeDefs: [characterSchema],
  resolvers: [characterResolver],
};
