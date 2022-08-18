const users = [
  {
    id: String(1),
    name: "First User",
    status: "Installed",
  },
  {
    id: String(2),
    name: "Second User",
    status: "In Progress",
  },
];

const resolvers = {
  Query: {
    users(_parent, _args, _context, _info) {
      return users;
    },
  },
  Mutation: {
    updateName(_parent, _args, _context, _info) {
      users[0].name = _args.name;
      return users[0];
    },
  },
};

export default resolvers;
