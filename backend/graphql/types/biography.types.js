import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

export const BiographyType = new GraphQLObjectType({
  name: 'Biography',
  fields: {
    fullName: { 
        type: GraphQLString,
        resolve: (src) => src['full-name']
     },
    alterEgos: { 
        type: GraphQLString,
        resolve: (src) => src['alter-egos']
     },
    aliases: { type: new GraphQLList(GraphQLString) },
    placeOfBirth: { 
        type: GraphQLString,
        resolve: (src) => src['place-of-birth']
    },
    firstAppearance: { 
        type: GraphQLString,
        resolve: (src) => src['first-appearance']
    },
    publisher: { type: GraphQLString },
  },
});