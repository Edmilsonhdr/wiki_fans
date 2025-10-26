import { GraphQLObjectType, GraphQLString } from 'graphql';

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    powerstats:  { type: PowerstatsType  },
    biography: { type: BiographyType },
    appearance: { type: AppearanceType },
    work: {type: Work},
    connections: {type: Connections},
    image: {type: Image}
  },
});