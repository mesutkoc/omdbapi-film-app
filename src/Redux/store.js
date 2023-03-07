import { configureStore } from '@reduxjs/toolkit';
import films from '../Redux/filmSlice';

export const store = configureStore({
    reducer: {
        films
    },
});
