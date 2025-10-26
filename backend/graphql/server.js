import express from 'express';
import fetch from 'node-fetch';
import { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLList } from 'graphql';
import { createHandler } from 'graphql-http/lib/use/express';
import { ruruHTML } from 'ruru/server';

import { loadEnvFile } from 'node:process';

loadEnvFile();

const AppearanceType = new GraphQLObjectType({
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

// Definindo o tipo User que representa os dados vindos da API
const PowerstatsType = new GraphQLObjectType({
  name: 'Powerstats',
  fields: {
    intelligence: { type: GraphQLInt },
    strength: { type: GraphQLInt },
    speed: { type: GraphQLInt },
    durability: { type: GraphQLInt },
    power: { type: GraphQLInt },
    combat: { type: GraphQLInt },
  },
});

const BiographyType = new GraphQLObjectType({
  name: 'Biography',
  fields: {
    fullName: { 
        type: GraphQLString,
        resolve: (src) => src['full-name']
     },
    alterEgos: { 
        type: GraphQLString,
        resolve: (src) => src['alter-egos']
     },
    aliases: { type: new GraphQLList(GraphQLString) },
    placeOfBirth: { 
        type: GraphQLString,
        resolve: (src) => src['place-of-birth']
    },
    firstAppearance: { 
        type: GraphQLString,
        resolve: (src) => src['first-appearance']
    },
    publisher: { type: GraphQLString },
  },
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    powerstats:  { type: PowerstatsType  },
    biography: { type: BiographyType },
    appearance: { type: AppearanceType },
  },
});

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
