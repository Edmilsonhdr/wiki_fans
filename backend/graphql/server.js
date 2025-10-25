import express from 'express';
import fetch from 'node-fetch';
import { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLList } from 'graphql';
import { createHandler } from 'graphql-http/lib/use/express';
import { ruruHTML } from 'ruru/server';

// Definindo o tipo User que representa os dados vindos da API
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});

// Definindo as queries disponíveis
const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve: async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        return res.json();
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve: async (_parent, args) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${args.id}`);
        return res.json();
      },
    },
  },
});

// Montando o schema
const schema = new GraphQLSchema({
  query: RootQuery,
});

const app = express();

// Endpoint principal do GraphQL
app.all('/graphql', createHandler({ schema }));

// Playground
app.get('/', (_req, res) => {
  res.type('html');
  res.end(ruruHTML({ endpoint: '/graphql' }));
});

app.listen(4000, () => {
  console.log('Servidor GraphQL rodando em http://localhost:4000/graphql');
});
