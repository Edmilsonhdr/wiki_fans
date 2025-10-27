import { GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLSchema } from 'graphql';
import { UserType } from './types/user.type.js';
import { userResolvers } from './resolvers/user.resolver.js';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve: userResolvers.Query.users,
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve: userResolvers.Query.user,
    },
  },
});

export const schema = new GraphQLSchema({
  query: QueryType,
});
