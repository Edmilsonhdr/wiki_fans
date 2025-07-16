const characters = require("../../data/characters");

module.exports = {
  Query: {
    characters: () => characters,
    character: (_, { id }) => characters.find((c) => c.id === id),
  },
};
