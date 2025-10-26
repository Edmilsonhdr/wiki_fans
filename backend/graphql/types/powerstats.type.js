import { GraphQLObjectType, GraphQLInt } from 'graphql';
// Definindo o tipo User que representa os dados vindos da API
export const PowerstatsType = new GraphQLObjectType({
  name: 'Powerstats',
  fields: {
    intelligence: { type: GraphQLInt },
    strength: { type: GraphQLInt },
    speed: { type: GraphQLInt },
    durability: { type: GraphQLInt },
    power: { type: GraphQLInt },
    combat: { type: GraphQLInt },
  },
});
