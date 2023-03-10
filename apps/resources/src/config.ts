import env from 'config.env';

const PROD = env.NODE_ENV == 'prod' ? true : false;

const ENV = {
  APOLLO: {
    typePaths: [`apps/users/**/*.{graphql,gql}`],
    path: `apps/users/src/graphql.ts`,
  },
  MONGO: {
    URI: env.MONGO_SALES_URI,
  },
  PORT: env.SALES_PORT,
  ENVIROMENT: PROD ? '\x1b[42m PRODUCTION \x1b[0m ' : '\x1b[44m DEVELOPMENT \x1b[0m ',
};

export default ENV;
