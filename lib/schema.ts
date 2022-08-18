const typeDefs = /* GraphQL */ `
  type User {
    id: ID!
    name: String!
    status: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    updateName(name: String!): User!
  }
`;

export default typeDefs;
