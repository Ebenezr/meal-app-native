import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite(state, action) {
      state.favorites.push(action.payload.id);
    },
    removeFavorite(state, action) {
      //   state.favorites = state.favorites.filter(
      //     (favorite) => favorite.id !== action.payload.id
      //   );
      state.favorites.spice(state.favorites.indexOf(action.payload.id), 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
