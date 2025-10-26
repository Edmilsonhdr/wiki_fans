import { loadEnvFile } from 'node:process';
import fetch from 'node-fetch';
import { GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLSchema } from 'graphql';
import { UserType } from './types/user.type.js'

loadEnvFile();
// Definindo as queries disponíveis
const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve: async () => {
        const res = await fetch(`https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}`);
        return res.json();
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve: async (_parent, args) => {
        const res = await fetch(`https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}/${args.id}`);
        return res.json();
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
});