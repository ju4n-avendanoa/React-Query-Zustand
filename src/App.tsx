import Card from "./components/Card";
import useFetchRepositories from "./hooks/useRepos";
import { useFavoriteReposStore } from "./store/favoriteRepos";

function App() {
  const { data, isLoading } = useFetchRepositories();
  const { favoriteReposId } = useFavoriteReposStore();

  if (isLoading) return <h3>Is Loading...</h3>;
  console.log(data);

  return (
    <>
      <h1>Repo</h1>
      {data?.map((repo) => (
        <Card
          repository={repo}
          key={repo.id}
          isFavorite={favoriteReposId.includes(repo.id) ? true : false}
        />
      ))}
      <h1>Favorite Repos</h1>
      {favoriteReposId.map((repoId) => (
        <p>{repoId}</p>
      ))}
    </>
  );
}

export default App;
