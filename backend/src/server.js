import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { ruruHTML } from 'ruru/server';
import { loadEnvFile } from 'node:process';
import { schema } from '../graphql/schema.js'

loadEnvFile();

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
