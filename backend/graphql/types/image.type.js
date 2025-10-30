import { GraphQLObjectType, GraphQLString } from 'graphql';

export const Image = new GraphQLObjectType({
    name: 'Image',
    fields: {
        url: {
            type: GraphQLString,
            resolve: (src) => {
                // A API pode retornar image.url ou image diretamente como string
                if (typeof src === 'string') {
                    return src;
                }
                return src?.url || src?.sm || src?.md || src?.lg || null;
            }
        }
    }
})