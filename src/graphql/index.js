import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';

import menuResolver from './car.resolver';

import * as menuSchema from './car.gql';
import * as root from './schema.gql';

const resolvers = [
  menuResolver,
];

const schemas = [
  menuSchema,
  root,
];

export default makeExecutableSchema({
  typeDefs: schemas,
  resolvers: merge.apply(this, resolvers),
});
