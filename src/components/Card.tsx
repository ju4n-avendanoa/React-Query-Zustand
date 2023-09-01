import React, { useMemo } from "react";
import { Repository } from "../hooks/types";
import { useFavoriteReposStore } from "../store/favoriteRepos";

interface Props {
  repository: Repository;
  isFavorite: boolean;
}

function Card({ repository, isFavorite }: Props) {
  const removeFavoriteRepo = useFavoriteReposStore(
    (state) => state.removeFavoriteRepo
  );
  const addFavoriteRepo = useFavoriteReposStore(
    (state) => state.addFavoriteRepo
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepo(repository.id);
    } else {
      addFavoriteRepo(repository.id);
    }
  };

  const backgroundColor = useMemo(() => {
    return isFavorite ? "blue" : "white";
  }, [isFavorite]);

  return (
    <React.Fragment>
      <p>{repository.name}</p>
      <button onClick={toggleFavorite} style={{ backgroundColor }}>
        {isFavorite ? "unlike" : "like"}
      </button>
    </React.Fragment>
  );
}

export default Card;
