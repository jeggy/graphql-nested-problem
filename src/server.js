import 'babel-polyfill';
import express from 'express';
import BodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { info } from 'winston';

import executableSchema from './graphql';

require('fetch-everywhere');

const serverPort = Number(process.env.PORT || 3000);
const server = express();

server.use(
  '/graphql',
  BodyParser.json(),
  graphqlExpress(request => ({
    schema: executableSchema,
    debug: true,
  })),
);

server.use(
  '/health',
  (req, res) => {
    res.set('Content-Type', 'application/json');
    res.json({ status: 'ok' });
    res.status(200);
    res.end();
  },
);

server.use(
  '/graphiql',
  graphiqlExpress({ endpointURL: '/graphql' }),
);

server.listen(serverPort, () =>
  info(`Nested graphql query example server is up and running on port ${serverPort}`),
);

