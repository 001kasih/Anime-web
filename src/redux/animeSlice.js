import { createSlice } from '@reduxjs/toolkit';

const animeSlice = createSlice({
  name: 'anime',
  initialState: {
    selectedAnime: null,
  },
  reducers: {
    setSelectedAnime: (state, action) => {
      state.selectedAnime = action.payload;
    },
    clearSelectedAnime: (state) => {
      state.selectedAnime = null;
    },
  },
});

export const { setSelectedAnime, clearSelectedAnime } = animeSlice.actions;

export default animeSlice.reducer;
