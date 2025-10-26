import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { ruruHTML } from 'ruru/server';
import { schema } from '../graphql/schema.js'

export const app = express();

// Endpoint principal do GraphQL
app.all('/graphql', createHandler({ schema }));

// Playground
app.get('/', (_req, res) => {
  res.type('html');
  res.end(ruruHTML({ endpoint: '/graphql' }));
});

