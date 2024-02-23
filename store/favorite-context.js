import { createContext, useState } from 'react';

const FavoriteContext = createContext({
  favorites: [],
  addFavorite: (favoriteId) => {},
  removeFavorite: (favoriteId) => {},
  isFavorite: (favoriteId) => {},
});

export { FavoriteContext };

const FavoriteContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteId) => {
    setUserFavorites((currentFavorites) => [...currentFavorites, favoriteId]);
  };
  const removeFavoriteHandler = (favoriteId) => {
    setUserFavorites((currentFavorites) =>
      currentFavorites.filter((id) => id !== favoriteId)
    );
  };

  const context = {
    favorites: userFavorites,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
