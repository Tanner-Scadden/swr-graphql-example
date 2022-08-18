export interface UserQueryOptions {
  userAttributes?: string;
}

export interface UseUsersResponse {
  users: {
    id: string;
    name: string;
    status: string;
  }[];
}
