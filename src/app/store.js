import { configureStore } from '@reduxjs/toolkit';
import AssetsSlice from '../features/counter/Assets/AssetsSlice';

export const store = configureStore({
  reducer: {
    assets: AssetsSlice,
  },
});
