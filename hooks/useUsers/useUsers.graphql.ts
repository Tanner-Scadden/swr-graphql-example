import type { UserQueryOptions } from "./useUsers.types";

export const USERS_QUERY_ATTRIBUTES_DEFAULT = "id name status";

export const usersQueryBuilder = (options?: UserQueryOptions) => `
  query Query {
    users {
      ${options?.userAttributes || USERS_QUERY_ATTRIBUTES_DEFAULT}
    }
  }
`;
