import {configureStore} from '@reduxjs/toolkit';
import userReducer from './Components/UserSlice';

export const store=configureStore({
    reducer:{
        user:userReducer
    }
})