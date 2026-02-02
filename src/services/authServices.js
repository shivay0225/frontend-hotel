import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import baseQuery from './baseApi'




export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: baseQuery,
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