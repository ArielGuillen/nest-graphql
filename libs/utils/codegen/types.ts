import { GraphQLFederationDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

interface Config {
  typePaths: string[];
  path: string;
}

const generateDefinitions = async ({ typePaths, path }: Config) => {
  const definitionsFactory = new GraphQLFederationDefinitionsFactory();
  await definitionsFactory.generate({
    typePaths,
    path: join(process.cwd(), path),
    outputAs: 'class',
  });
};

export default async function generateTypes(appname: string) {
  generateDefinitions({
    typePaths: [`apps/${appname}/src/**/*.{graphql,gql}`],
    path: `apps/${appname}/src/graphql.ts`,
  });
}
