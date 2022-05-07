import { configureStore } from '@reduxjs/toolkit';
import  assetsSlice  from '../features/Assets/AssetsSlice';


export const store = configureStore({
  reducer: {
    assets: assetsSlice,
  },
});
