import express from 'express';
import fetch from 'node-fetch';
import { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLList, GraphQLScalarType } from 'graphql';
import { createHandler } from 'graphql-http/lib/use/express';
import { ruruHTML } from 'ruru/server';

import { loadEnvFile } from 'node:process';

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

app.listen(process.env.PORT, () => {
  console.log(`Servidor GraphQL rodando em http://localhost:${process.env.PORT}/graphql`);
});
