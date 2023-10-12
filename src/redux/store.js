import {configureStore} from '@reduxjs/toolkit';
import jobSlice  from './job-reducer';

export const store=configureStore({
  reducer:{
    job : jobSlice.reducer
  }
})