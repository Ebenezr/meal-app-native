import { createContext } from 'react';

const FavoriteContext = createContext({
  favorites: [],
  addFavorite: (favorite) => {},
  removeFavorite: (favoriteId) => {},
  isFavorite: (favoriteId) => {},
});

export { FavoriteContext };

const FavoriteContextProvider = ({ children }) => {
  return (
    <FavoriteContext.Provider value={{}}>{children}</FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
