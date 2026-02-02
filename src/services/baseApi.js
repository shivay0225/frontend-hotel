import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({ baseUrl: 'https://api.srheaven.com/auth' }) ;

export default baseQuery    