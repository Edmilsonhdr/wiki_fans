const { gql } = require("apollo-server");

module.exports = gql`
  type Character {
    id: ID!
    name: String!
    power: String!
    image: String!
  }

  type Query {
    characters: [Character!]!
    character(id: ID!): Character
  }
`;
