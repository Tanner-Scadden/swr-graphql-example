import { GraphQLClient, gql } from "graphql-request";

const graphqlUrl = "http://localhost:3000/api/graphql";

const client = new GraphQLClient(graphqlUrl);

export const appClient = async (
  queryOrMutationString: string,
  variables: Record<string, any>
) => {
  const queryOrMutation = gql`
    ${queryOrMutationString}
  `;

  return await client.request(queryOrMutation, variables);
};
