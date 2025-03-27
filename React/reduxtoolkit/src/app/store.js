import { configureStore } from '@reduxjs/toolkit'
import countReducer from '../features/counter/counterSlice'
import Counter from '../features/counter/counter'

export const store = configureStore({
  reducer: {
   counter: countReducer,
    
  },
})
