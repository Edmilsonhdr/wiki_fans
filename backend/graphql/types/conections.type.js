import { GraphQLObjectType, GraphQLString } from 'graphql';

export const Connections = new GraphQLObjectType({
    name: 'Connections',
    fields: {
        groupAffiliation: {
            type: GraphQLString,
            resolve: (src) => src['group-affiliation']
        },
        relatives: {type: GraphQLString}
    }
})