import { loadEnvFile } from 'node:process';
import { app } from './app.js';


loadEnvFile();

app.listen(process.env.PORT, () => {
  console.log(`Servidor GraphQL rodando em http://localhost:${process.env.PORT}/graphql`);
});
