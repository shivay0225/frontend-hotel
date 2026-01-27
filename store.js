import { configureStore } from '@reduxjs/toolkit'

import {authAPI} from "../SRhaven copy/src/services/authServices"

export const store = configureStore({


  reducer: {

    [authAPI.reducerPath] : authAPI.reducer,

  },

    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(authAPI.middleware)

   
});
