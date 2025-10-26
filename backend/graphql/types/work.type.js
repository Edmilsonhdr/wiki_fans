import { GraphQLObjectType, GraphQLString } from 'graphql';

export const Work = new GraphQLObjectType({
    name: 'Work',
    fields: {
        occupation: {type: GraphQLString},
        base: {type: GraphQLString}
    }
})