import { createContext, useState } from 'react';

const FavoriteContext = createContext({
  favorites: [],
  addFavorite: (favorite) => {},
  removeFavorite: (favoriteId) => {},
  isFavorite: (favoriteId) => {},
});

export { FavoriteContext };

const FavoriteContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favorite) => {
    setUserFavorites((currentFavorites) => {
      return currentFavorites.concat(favorite);
    });
  };
  const removeFavoriteHandler = (favoriteId) => {
    setUserFavorites((currentFavorites) => {
      return currentFavorites.filter((favorite) => favorite.id !== favoriteId);
    });
  };

  const itemIsFavoriteHandler = (favoriteId) => {
    return userFavorites.some((favorite) => favorite.id === favoriteId);
  };

  const context = {
    favorites: userFavorites,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
