const { createContext, useState } = require("react");

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: () => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((curentFavIds) => [...curentFavIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealIds((curentFavIds) =>
      curentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContextProvider;
