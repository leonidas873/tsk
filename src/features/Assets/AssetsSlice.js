import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { data } from './AssetsData';

const initialState = {
  assets:data,
  searchQuery:''
};



export const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    setSearchQuery: (state, {payload}) => {
      state.searchQuery = payload;
    }
  }
});

export const { setSearchQuery } = assetsSlice.actions;



export default assetsSlice.reducer;
