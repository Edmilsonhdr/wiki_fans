import { GraphQLObjectType, GraphQLString } from 'graphql';

export const Image = new GraphQLObjectType({
    name: 'Image',
    fields: {
        url: {type: GraphQLString}
    }

})