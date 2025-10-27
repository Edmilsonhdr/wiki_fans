import { makeExecutableSchema } from '@graphql-tools/schema';
import { userResolvers } from './resolvers/user.resolver.js';
import { UserType } from './types/user.type.js';
import { GraphQLObjectType, GraphQLInt, GraphQLList } from 'graphql';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: { type: new GraphQLList(UserType) },
    user: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
    },
  },
});

export const schema = makeExecutableSchema({
  typeDefs: [QueryType],
  resolvers: [userResolvers],
});
