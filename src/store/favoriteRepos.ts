import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RepoState {
  favoriteReposId: number[];
  addFavoriteRepo: (id: number) => void;
  removeFavoriteRepo: (id: number) => void;
}

export const useFavoriteReposStore = create<RepoState>()(
  persist(
    (set) => ({
      favoriteReposId: [],
      addFavoriteRepo: (id) =>
        set((state) => ({
          favoriteReposId: [...state.favoriteReposId, id],
        })),
      removeFavoriteRepo: (id) =>
        set((state) => ({
          favoriteReposId: state.favoriteReposId.filter(
            (repoId) => repoId !== id
          ),
        })),
    }),
    {
      name: "favorite-repos",
    }
  )
);
