const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");

const { typeDefs, resolvers } = require("./graphql");

async function startServer() {
  const app = express();

  // Servir a pasta public (com as imagens)
  app.use("/images", express.static(path.join(__dirname, "public/images")));

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`🚀 GraphQL em http://localhost:4000${server.graphqlPath}`);
    console.log(`🖼️ Imagens disponíveis em http://localhost:4000/images`);
  });
}

startServer();
