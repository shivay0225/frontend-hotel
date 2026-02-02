import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({ baseUrl: 'http://127.0.0.1:5000/auth' }) ;

export default baseQuery 