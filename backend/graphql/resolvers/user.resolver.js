import fetch from 'node-fetch';
import { loadEnvFile } from 'node:process';

loadEnvFile();
export const userResolvers = {
  Query: {
    users: async () => {
      const res = await fetch(`https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}`);
      return res.json();
    },
    user: async (_parent, args) => {
      const res = await fetch(`https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}/${args.id}`);
      return res.json();
    },
  },
};
