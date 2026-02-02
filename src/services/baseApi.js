import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({ baseUrl: 'http://api.srheaven.com/auth' }) ;

export default baseQuery    