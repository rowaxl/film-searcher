import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const favSlice = createSlice({
  name: 'favs',
  initialState: {
    list: ([] as number[])
  },
  reducers: {
    toggleFav(state, action) {
      const index = state.list.findIndex(f => f === action.payload);

      if (index < 0) {
        state.list.push(action.payload);
      } else {
        state.list = [...state.list.slice(0, index), ...state.list.slice(index + 1)];
      }
    }
  }
});

export const selectFavs = (state: { favs: { list: number[] } }) => state.favs.list;
export const { toggleFav } = favSlice.actions;
export default favSlice;
