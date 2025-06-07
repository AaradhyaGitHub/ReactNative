// @ts-nocheck
import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {}
});

export default function FavoritesContextProvider({ children }) {
  const [favoriteCarIds, setFavoriteCarIds] = useState([]);

  function addFavorite(id) {
    setFavoriteCarIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteCarIds((currentFavIds) =>
      currentFavIds.filter((carId) => carId !== id)
    );
  }

  const ctxValue = {
    ids: favoriteCarIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
  };

  return (
    <FavoritesContext.Provider value={ctxValue}>
      {children}
    </FavoritesContext.Provider>
  );
}
