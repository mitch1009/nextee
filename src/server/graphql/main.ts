import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { resolvers, typeDefs } from './schema';

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export const handler = startServerAndCreateNextHandler(server);