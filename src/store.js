import { configureStore } from '@reduxjs/toolkit'

import {authAPI} from "./services/authServices"

export const store = configureStore({


  reducer: {

    [authAPI.reducerPath] : authAPI.reducer,

  },

    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(authAPI.middleware)

   
});
