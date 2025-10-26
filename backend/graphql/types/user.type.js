import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

import { PowerstatsType } from './powerstats.type.js';
import { BiographyType } from './biography.type.js';
import { AppearanceType } from './appearance.type.js';
import { Work } from './work.type.js';
import { Connections } from './conections.type.js';
import { Image } from './image.type.js';

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    powerstats:  { type: PowerstatsType  },
    biography: { type: BiographyType },
    appearance: { type: AppearanceType },
    work: {type: Work},
    connections: {type: Connections},
    image: {type: Image}
  },
});