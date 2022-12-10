import useFetch from "../hooks/useFetch";

function CustomHookExample1() {
  const { data, loading } = useFetch("https://api.github.com/users", {});

  if (loading) {
    return <h3>Loading.....</h3>;
  }
  return (
    <div>
      {data.map((user) => (
        <h3 key={user.id}>{user.login}</h3>
      ))}
    </div>
  );
}

export default CustomHookExample1;
