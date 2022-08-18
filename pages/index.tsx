import { appClient } from "lib/appClient";
import useUsers, { usersQueryBuilder } from "hooks/useUsers";
import { SWRConfig, unstable_serialize } from "swr";

const Home = () => {
  const { users } = useUsers();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}: {user.status}
        </li>
      ))}
    </ul>
  );
};
const HomePage = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Home />
    </SWRConfig>
  );
};

export async function getServerSideProps() {
  const usersQuery = usersQueryBuilder();

  const users = await appClient(usersQuery, {});

  return {
    props: {
      fallback: {
        [unstable_serialize([usersQuery])]: users,
      },
    },
  };
}

export default HomePage;
