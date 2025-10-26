import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

export const AppearanceType = new GraphQLObjectType({
    name: 'Appearance',
    fields: {
        gender: {type: GraphQLString },
        race: {type: GraphQLString },
        height: { type: new GraphQLList(GraphQLString) },
        weight: { type: new GraphQLList(GraphQLString) },
        eyeColor: {
            type: GraphQLString,
            resolve: (src) => src['eye-color']
        },
        hairColor: {
            type: GraphQLString,
            resolve: (src) => src['hair-color']
        },
    }
})