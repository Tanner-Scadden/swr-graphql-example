import useSWR from "swr";

import { appClient } from "lib/appClient";
import { usersQueryBuilder } from "./useUsers.graphql";

import type { UseUsersResponse, UserQueryOptions } from "./useUsers.types";

export const useUsers = (options: UserQueryOptions = {}) => {
  // Could also watch for query strings in the url and pass them into the appClient variables for filters/pagination

  const { data, error, mutate } = useSWR<UseUsersResponse>(
    [usersQueryBuilder(options)],
    appClient,
    {
      revalidateOnMount: false,
      onSuccess: () => console.log("FETCHED"),
    }
  );

  return { users: data.users, error, mutate };
};

export default useUsers;
