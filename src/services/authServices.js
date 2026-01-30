import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:5000/auth' }),
  endpoints: (builder) => ({

     login: builder.mutation({
      query: (body) => ({
      url: "/login",
      method: "POST",
      body   
      }),
    }),

     register: builder.mutation({
      query: (body) => ({
      url: "/register",
      method: "POST",
      body   
      }),
    }),

  }),
})
 export const {useLoginMutation, useRegisterMutation} = authAPI 